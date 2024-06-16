import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import {HomeComponent} from "./components/home/home.component";
import {HighlightService} from "@service/common/highlight.service";
import {NgOptimizedImage} from "@angular/common";
import * as angularTopic from './modules/topics/angular/topic.angular';
import {EldenHomeComponent} from "./elden/components/elden-home/elden-home.component";
import {EldenListComponent} from "./elden/components/elden-list/elden-list.component";
import {MyMatCommonModule} from "./modules/mat-common/my-mat-common.module";
import {AngularTopicModule} from "./modules/topics/angular/angular-topic.module";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'angular/newProject', component: angularTopic.NewProjectComponent},
  {path: 'angular/interpolationSyntax', component: angularTopic.InterpolationSyntaxComponent},
  {path: 'angular/inputPropertySyntax', component: angularTopic.InputPropertySyntaxComponent},
  {path: 'angular/input', component: angularTopic.InputComponent},
  {path: 'angular/output', component: angularTopic.OutputComponent},
  {path: 'angular/cfFor', component: angularTopic.CfForComponent},
  {path: 'angular/cfIf', component: angularTopic.CfIfComponent},
  {path: 'angular/conditionalStyles', component: angularTopic.ConditionalStylesComponent},
  {path: 'angular/cfSwitch', component: angularTopic.CfSwitchComponent},
  {path: 'angular/ngContainer', component: angularTopic.NgContainerComponent},
  {path: 'angular/pipe', component: angularTopic.PipeComponent},
  {path: 'angular/viewChild', component: angularTopic.ViewChildComponent},
  {path: 'angular/viewChildren', component: angularTopic.ViewChildrenComponent},
  {path: 'angular/contentProjection', component: angularTopic.ContentProjectionComponent},
  {path: 'angular/contentChild', component: angularTopic.ContentChildComponent},
  {path: 'angular/ngTemplate', component: angularTopic.NgTemplateComponent},
  {path: 'angular/highlightedDirective', component: angularTopic.HighlightedDirectiveUsageComponent},
  {path: 'angular/structuralDirective', component: angularTopic.UnlessDirectiveUsageComponent},
  {path: 'angular/stylesHost', component: angularTopic.HostComponent},
  {path: 'angular/stylesEncapsulation', component: angularTopic.ViewEncapsulationComponent},
  {path: 'angular/services/getCall', component: angularTopic.GetCallComponent},
  {path: 'angular/services/ownProvider', component: angularTopic.OwnProviderComponent},
  {path: 'angular/services/ownProviderSimplified', component: angularTopic.OwnProviderSimplifiedComponent},
  {path: 'angular/services/hierarchicalInjection', component: angularTopic.HierarchicalInjectionComponent},
  {path: 'angular/services/treeShakeableProvider', component: angularTopic.TreeShakeableProviderComponent},
  {path: 'angular/services/injectionToken', component: angularTopic.InjectionTokenComponent},
  {path: 'angular/services/injectionDecorator', component: angularTopic.InjectionDecoratorsComponent},
  {path: 'angular/changeDetection/defaultChangeDetection', component: angularTopic.DefaultComponent},
  {path: 'angular/changeDetection/onPushChangeDetection', component: angularTopic.OnPushComponent},
  {path: 'angular/changeDetection/observableOnPushChangeDetection', component: angularTopic.ObservableOnPushComponent},
  {path: 'angular/changeDetection/attributeDecorator', component: angularTopic.AttributeDecoratorComponent},
  {path: 'angular/changeDetection/customChangeDetection', component: angularTopic.CustomChangeDetectionComponent},
  {path: 'angular/lifecycle/onInit', component: angularTopic.OnInitHookComponent},
  {path: 'angular/lifecycle/onDestroy', component: angularTopic.OnDestroyHookComponent},
  {path: 'angular/lifecycle/onChanges', component: angularTopic.OnChangesHookComponent},
  {path: 'angular/lifecycle/afterContentChecked', component: angularTopic.AfterContentCheckedHookComponent},
  {path: 'angular/lifecycle/afterViewChecked', component: angularTopic.AfterViewCheckedHookComponent},
  {path: 'angular/lifecycle/lifecycleOverview', component: angularTopic.LifecycleOverviewComponent},
  {
    path: 'elden',
    component: EldenHomeComponent,
    title: 'Elden - home',
    children: [{
      path: 'list',
      component: EldenListComponent,
      title: 'Elden - list',
      pathMatch: 'full'
    }]
  }
]


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
