import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from "@angular/common/http";
import {MatTreeModule} from "@angular/material/tree";
import {MatDividerModule} from '@angular/material/divider';
import {MatTabsModule} from '@angular/material/tabs';
import {HomeComponent} from "./components/home/home.component";
import {NewProjectComponent} from "./components/topics/angular/new-project/new-project.component";
import {
  InterpolationSyntaxComponent
} from "./components/topics/angular/interpolation-syntax/interpolation-syntax.component";
import {HighlightService} from "./service/HighlightService";
import { InputPropertySyntaxComponent } from './components/topics/angular/input-property-syntax/input-property-syntax.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'angular/newProject', component: NewProjectComponent},
  {path: 'angular/interpolationSyntax', component: InterpolationSyntaxComponent},
  {path: 'angular/inputPropertySyntax', component: InputPropertySyntaxComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewProjectComponent,
    InterpolationSyntaxComponent,
    InputPropertySyntaxComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTreeModule,
    MatDividerModule,
    MatTabsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [
    HighlightService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
