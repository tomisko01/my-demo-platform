import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from "@angular/forms";
import {RouterModule} from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import {HomeComponent} from "./components/home/home.component";
import {HighlightService} from "@service/common/highlight.service";
import {NgOptimizedImage} from "@angular/common";
import {MyMatCommonModule} from "./modules/mat-common/my-mat-common.module";
import {AngularTopicModule} from "./modules/topics/angular/angular-topic.module";
import {routes} from "./constants/routes";

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
    AngularTopicModule
  ],
  providers: [
    HighlightService
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
