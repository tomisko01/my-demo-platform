import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
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
import {
  HighlightedDirectiveChildComponent
} from '@angularTopic/directive/component/highlighted-directive-child/highlighted-directive-child.component';
import {NgxUnlessDirective} from "@angularTopic/directive/ngx-unless.directive";
import {
  UnlessDirectiveUsageComponent
} from '@angularTopic/directive/component/ngx-unless/unless-directive-usage/unless-directive-usage.component';
import {HostComponent} from '@angularTopic/styles/host/host.component';
import {HostChildrenComponent} from '@angularTopic/styles/host/component/host-children/host-children.component';
import {ViewEncapsulationComponent} from '@angularTopic/styles/view-encapsulation/view-encapsulation.component';
import {
  ViewEncapsulationChildComponent
} from '@angularTopic/styles/view-encapsulation/component/view-encapsulation-child/view-encapsulation-child.component';
import {TopicHeaderComponent} from './components/topic-header/topic-header.component';
import {MyMatCommonModule} from "./mat-common/my-mat-common.module";
import {LifecycleHooksModule} from "./modules/topics/angular/lifecycle-hooks/lifecycle-hooks.module";
import {ChangeDetectionModule} from "./modules/topics/angular/change-detection/change-detection.module";
import {InjectionModule} from "./modules/topics/angular/injection/injection.module";
import * as angularTopic from './modules/topics/angular/topic.angular';
import {EldenHomeComponent} from "./elden/components/elden-home/elden-home.component";
import {EldenListComponent} from "./elden/components/elden-list/elden-list.component";


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
  {path: 'angular/structuralDirective', component: UnlessDirectiveUsageComponent},
  {path: 'angular/stylesHost', component: HostComponent},
  {path: 'angular/stylesEncapsulation', component: ViewEncapsulationComponent},
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
    HighlightedDirectiveChildComponent,
    NgxUnlessDirective,
    UnlessDirectiveUsageComponent,
    HostComponent,
    HostChildrenComponent,
    ViewEncapsulationComponent,
    ViewEncapsulationChildComponent,
    TopicHeaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    NgOptimizedImage,
    MyMatCommonModule,
    LifecycleHooksModule,
    ChangeDetectionModule,
    InjectionModule
  ],
  providers: [
    HighlightService
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
