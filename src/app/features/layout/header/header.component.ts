import { Component, HostListener, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { BehaviorSubject, take } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  showMobileNav$ = new BehaviorSubject(false);
  showSurface$ = new BehaviorSubject(false);
  openMobileDrawer$ = new BehaviorSubject(false);

  private static TRANSPARENT_NAV_LIMIT_OFFSET = 30;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpointObserver
      .observe('(min-width: 600px)')
      .subscribe((result) => {
        this.showMobileNav$.next(!result.matches);
        this.closeDrawerOnLargeScreen(result.matches);
      });
  }

  @HostListener('window:scroll', ['$event']) onScroll(): void {
    this.showSurface$.next(
      window.scrollY >= HeaderComponent.TRANSPARENT_NAV_LIMIT_OFFSET
    );
  }

  onMobileDrawerToggle(): void {
    this.openMobileDrawer$.pipe(take(1)).subscribe((open) => {
      open ? this.onMobileNavClose() : this.onMobileNavOpen();
    });
  }

  private onMobileNavOpen(): void {
    this.openMobileDrawer$.next(true);
  }

  private onMobileNavClose(): void {
    this.openMobileDrawer$.next(false);
  }

  private closeDrawerOnLargeScreen(isLargeScreen: boolean): void {
    this.openMobileDrawer$.pipe(take(1)).subscribe((open) => {
      if (isLargeScreen && open) {
        this.onMobileNavClose();
      }
    });
  }
}
