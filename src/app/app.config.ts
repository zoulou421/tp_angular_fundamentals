import { ApplicationConfig, importProvidersFrom, ImportProvidersSource, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
/*import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';*/
import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';




//Your web app's Firebase configuration
  const firebaseConfig = {
  apiKey: "AIzaSyDYEQfUzHku3RRwQO75AD2pgE-n_KntD1I",
  authDomain: "angular-firebase-app-d2bf0.firebaseapp.com",
  projectId: "angular-firebase-app-d2bf0",
  storageBucket: "angular-firebase-app-d2bf0.appspot.com",
  messagingSenderId: "343872059144",
  appId: "1:343872059144:web:4b1f8cfab0650df6745ebd"
};

export const appConfig: ApplicationConfig = {
    /*providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom([
    provideFirebaseApp(()=>initializeApp(firebaseConfig)) ,
    provideAuth(()=>getAuth()),
     ])
  ]*/
     providers: [
      provideZoneChangeDetection({ eventCoalescing: true }),
      provideRouter(routes),
      provideHttpClient(),
      provideFirebaseApp(() => initializeApp(firebaseConfig)), // Initialize Firebase app
      provideAuth(() => getAuth()), // Correctly provide Firebase Auth
    ]
};

