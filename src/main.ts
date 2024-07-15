import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
/*
import {bootstrapApplication, BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";
import {importProvidersFrom} from "@angular/core";
import {provideAnimations} from "@angular/platform-browser/animations";
import {provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
*/

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

/*
REFACTOR TO STANDALONE COMPONENTS

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule),
    provideAnimations(),
    provideHttpClient(withInterceptorsFromDi()),
    importProvidersFrom(FormsModule),
... rest from AppModule
  ]
})

 */
