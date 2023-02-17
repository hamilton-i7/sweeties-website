import { Component } from '@angular/core';
import { INPUT_DELAY_MS } from '../../../core/constants/common';
import { EMAIL_REGEX } from '../../../core/constants/email';
import {
  EMPTY_FIELD,
  INVALID_EMAIL,
} from '../../../core/constants/error-messages';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  year = new Date().getFullYear();
  email = '';
  showEmailError = false;
  emailErrorMessage = '';
  emailChangeTimeout?: ReturnType<typeof setTimeout>;
  enableLiveFeedback$ = new BehaviorSubject(false);

  onEmailChange({ value }: { value: string }): void {
    clearTimeout(this.emailChangeTimeout);
    this.email = value;

    this.emailChangeTimeout = setTimeout(() => {
      this.showEmailError = !this.isValidEmail(value);
    }, INPUT_DELAY_MS);
  }

  isValidEmail(email: string): boolean {
    if (email.trim().length === 0) {
      this.setEmailErrorMessage(EMPTY_FIELD);
      return false;
    }
    if (!EMAIL_REGEX.test(email)) {
      this.setEmailErrorMessage(INVALID_EMAIL);
      return false;
    }
    return true;
  }

  onSubscribe(): void {
    this.enableLiveFeedback$.next(true);
  }

  private setEmailErrorMessage(message: string): void {
    this.emailErrorMessage = message;
  }
}
