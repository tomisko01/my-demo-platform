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
import {HighlightService} from "@service/HighlightService";
import { InputPropertySyntaxComponent } from './components/topics/angular/input-property-syntax/input-property-syntax.component';
import { InputComponent } from './components/topics/angular/input/input.component';
import { CardComponent } from './components/topics/angular/input/component/card/card.component';
import {OutputComponent} from "./components/topics/angular/output/output.component";
import {OutputChildComponent} from "./components/topics/angular/output/component/output-child/output-child.component";
import {CfForComponent} from "./components/topics/angular/control-flow/cf-for/cf-for.component";
import { CfForChildComponent } from './components/topics/angular/control-flow/cf-for/component/cf-for-child/cf-for-child.component';
import { CfIfComponent } from './components/topics/angular/control-flow/cf-if/cf-if.component';
import { ConditionalStatesComponent } from './components/topics/angular/conditional-states/conditional-states.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'angular/newProject', component: NewProjectComponent},
  {path: 'angular/interpolationSyntax', component: InterpolationSyntaxComponent},
  {path: 'angular/inputPropertySyntax', component: InputPropertySyntaxComponent},
  {path: 'angular/input', component: InputComponent},
  {path: 'angular/output', component: OutputComponent},
  {path: 'angular/cfFor', component: CfForComponent},
  {path: 'angular/cfIf', component: CfIfComponent},
  {path: 'angular/conditionalStyles', component: ConditionalStatesComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewProjectComponent,
    InterpolationSyntaxComponent,
    InputPropertySyntaxComponent,
    InputComponent,
    CardComponent,
    OutputComponent,
    OutputChildComponent,
    CfForComponent,
    CfForChildComponent,
    CfIfComponent,
    ConditionalStatesComponent
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
