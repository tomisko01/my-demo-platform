import {importProvidersFrom, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from "@angular/forms";
import {RouterModule} from '@angular/router';
import {
  HttpClientModule,
  provideHttpClient,
  withFetch,
  withInterceptors
} from "@angular/common/http";
import {HomeComponent} from "./components/home/home.component";
import {HighlightService} from "@service/common/highlight.service";
import {NgOptimizedImage} from "@angular/common";
import {MyMatCommonModule} from "./modules/mat-common/my-mat-common.module";
import {AngularTopicModule} from "./modules/topics/angular/angular-topic.module";
import {routes} from "./constants/routes";

import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient} from '@angular/common/http';
import {loadingInterceptor} from "@angularTopic/signal/signal-crud/loading/loading.interceptor";
import {ReactiveMessagesService} from "@angularTopic/reactive/service/reactive-messages.service";
import {MatNativeDateModule} from "@angular/material/core";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    NgOptimizedImage,
    MyMatCommonModule,
    AngularTopicModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [
    HighlightService,
    provideHttpClient(withInterceptors([loadingInterceptor]), withFetch()),
    ReactiveMessagesService,
    importProvidersFrom(MatNativeDateModule),
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
