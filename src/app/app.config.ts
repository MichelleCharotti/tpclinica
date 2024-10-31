import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { enviroment } from './enviroment/enviroment';
import { provideHttpClient } from '@angular/common/http';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), 
    provideFirebaseApp(() => initializeApp(enviroment)), provideAuth(() => getAuth()), provideFirestore(() => getFirestore(),),
    provideStorage(()=>getStorage()),
    provideHttpClient(), 
    {provide:FIREBASE_OPTIONS,useValue:enviroment},
    
  ]

};
