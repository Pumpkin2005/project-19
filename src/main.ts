import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import {HomeComponent} from "./app/home/home.component";
import {RegistrationComponent} from "./app/registration/registration.component";
import { HttpClientModule } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: HomeComponent }, // Головна сторінка
      { path: 'registration', component: RegistrationComponent } // Сторінка "Про нас"
    ])
  ]
}).catch(err => console.error(err));
