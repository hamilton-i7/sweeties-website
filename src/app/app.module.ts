import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import {
  ScreenTrackingService,
  UserTrackingService,
} from '@angular/fire/analytics';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { FeaturesModule } from './features/features.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShareModule } from './share/share.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getStorage, provideStorage } from '@angular/fire/storage';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    FeaturesModule,
    BrowserAnimationsModule,
    ShareModule,
  ],
  providers: [ScreenTrackingService, UserTrackingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
