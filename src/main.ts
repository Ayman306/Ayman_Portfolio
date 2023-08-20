import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { App_Route } from './app/app.route';
import { ApiService } from './app/service/api.service';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(App_Route),
    ApiService,
    importProvidersFrom(HttpClientModule),
  ],
});
