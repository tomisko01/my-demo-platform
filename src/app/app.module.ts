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
import {InterpolationSyntaxComponent} from "@angularTopic/interpolation-syntax/interpolation-syntax.component";
import {HighlightService} from "@service/HighlightService";
import {InputPropertySyntaxComponent} from '@angularTopic/input-property-syntax/input-property-syntax.component';
import {InputComponent} from '@angularTopic/input/input.component';
import {OutputComponent} from "@angularTopic/output/output.component";
import {OutputChildComponent} from "@angularTopic/output/component/output-child/output-child.component";
import {CfForComponent} from "@angularTopic/control-flow/cf-for/cf-for.component";
import {CfForChildComponent} from '@angularTopic/control-flow/cf-for/component/cf-for-child/cf-for-child.component';
import {CfIfComponent} from '@angularTopic/control-flow/cf-if/cf-if.component';
import {ConditionalStylesComponent} from '@angularTopic/conditional-styles/conditional-styles.component';
import {CfSwitchComponent} from '@angularTopic/control-flow/cf-switch/cf-switch.component';
import {NgContainerComponent} from '@angularTopic/ng-container/ng-container.component';
import {PipeComponent} from '@angularTopic/pipe/pipe.component';
import {ViewChildComponent} from '@angularTopic/view-child/view-child.component';
import {VcChildComponent} from '@angularTopic/view-child/component/vc-child/vc-child.component';
import {InputChildComponent} from "@angularTopic/input/component/input-child/input-child.component";
import {NewProjectComponent} from "@angularTopic/new-project/new-project.component";
import {ViewChildrenComponent} from '@angularTopic/view-children/view-children.component';
import {
  ViewChildrenChildComponent
} from '@angularTopic/view-children/component/view-children-child/view-children-child.component';
import {MatTooltip} from "@angular/material/tooltip";
import {ContentProjectionComponent} from '@angularTopic/content-projection/content-projection.component';
import {
  ContentProjectionChildComponent
} from '@angularTopic/content-projection/component/content-projection-child/content-projection-child.component';
import {NgOptimizedImage} from "@angular/common";
import {ContentChildComponent} from '@angularTopic/content-child/content-child.component';
import {
  ContentChildChildComponent
} from '@angularTopic/content-child/component/content-child-child/content-child-child.component';
import {
  ContentChildImageComponent
} from '@angularTopic/content-child/component/content-child-image/content-child-image.component';
import {NgTemplateComponent} from '@angularTopic/ng-template/ng-template.component';
import {
  NgTemplateChildComponent
} from '@angularTopic/ng-template/component/ng-template-child/ng-template-child.component';
import {HighlightedDirective} from "@angularTopic/directive/highlighted.directive";
import {
  HighlightedDirectiveUsageComponent
} from "@angularTopic/directive/component/highlighted-directive-usage/highlighted-directive-usage.component";
import { HighlightedDirectiveChildComponent } from './components/topics/angular/directive/component/highlighted-directive-child/highlighted-directive-child.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'angular/newProject', component: NewProjectComponent},
  {path: 'angular/interpolationSyntax', component: InterpolationSyntaxComponent},
  {path: 'angular/inputPropertySyntax', component: InputPropertySyntaxComponent},
  {path: 'angular/input', component: InputComponent},
  {path: 'angular/output', component: OutputComponent},
  {path: 'angular/cfFor', component: CfForComponent},
  {path: 'angular/cfIf', component: CfIfComponent},
  {path: 'angular/conditionalStyles', component: ConditionalStylesComponent},
  {path: 'angular/cfSwitch', component: CfSwitchComponent},
  {path: 'angular/ngContainer', component: NgContainerComponent},
  {path: 'angular/pipe', component: PipeComponent},
  {path: 'angular/viewChild', component: ViewChildComponent},
  {path: 'angular/viewChildren', component: ViewChildrenComponent},
  {path: 'angular/contentProjection', component: ContentProjectionComponent},
  {path: 'angular/contentChild', component: ContentChildComponent},
  {path: 'angular/ngTemplate', component: NgTemplateComponent},
  {path: 'angular/highlightedDirective', component: HighlightedDirectiveUsageComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewProjectComponent,
    InterpolationSyntaxComponent,
    InputPropertySyntaxComponent,
    InputComponent,
    InputChildComponent,
    OutputComponent,
    OutputChildComponent,
    CfForComponent,
    CfForChildComponent,
    CfIfComponent,
    ConditionalStylesComponent,
    CfSwitchComponent,
    NgContainerComponent,
    PipeComponent,
    ViewChildComponent,
    VcChildComponent,
    ViewChildrenComponent,
    ViewChildrenChildComponent,
    ContentProjectionComponent,
    ContentProjectionChildComponent,
    ContentChildComponent,
    ContentChildChildComponent,
    ContentChildImageComponent,
    NgTemplateComponent,
    NgTemplateChildComponent,
    HighlightedDirectiveUsageComponent,
    HighlightedDirective,
    HighlightedDirectiveChildComponent
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
    HttpClientModule,
    MatTooltip,
    NgOptimizedImage
  ],
  providers: [
    HighlightService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
