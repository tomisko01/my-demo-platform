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
import {GetCallComponent} from '@angularTopic/services/get-call/get-call.component';
import {OwnProviderComponent} from '@angularTopic/services/dependencyInjection/own-provider/own-provider.component';
import {
  OwnProviderSimplifiedComponent
} from '@angularTopic/services/dependencyInjection/own-provider-simplified/own-provider-simplified.component';
import {
  HierarchicalInjectionComponent
} from "@angularTopic/services/dependencyInjection/hierarchical-injection/hierarchical-injection.component";
import {
  HiChildComponent
} from "@angularTopic/services/dependencyInjection/hierarchical-injection/component/hi-child/hi-child.component";
import {
  TreeShakeableProviderComponent
} from '@angularTopic/services/dependencyInjection/tree-shakeable-provider/tree-shakeable-provider.component';
import {
  InjectionTokenComponent
} from '@angularTopic/services/dependencyInjection/injection-token/injection-token.component';
import {
  InjectionDecoratorsComponent
} from '@angularTopic/services/dependencyInjection/injection-decorators/injection-decorators.component';
import {
  InjDecChildComponent
} from '@angularTopic/services/dependencyInjection/injection-decorators/child/inj-dec-child/inj-dec-child.component';
import {HostInjectDirective} from "@angularTopic/services/dependencyInjection/directive/host-inject.directive";
import { DefaultComponent } from '@angularTopic/services/changeDetection/default/default.component';
import { OnPushComponent } from '@angularTopic/services/changeDetection/on-push/on-push.component';
import { OnPushChildComponent } from '@angularTopic/services/changeDetection/on-push/child/on-push-child.component';
import { ObservableOnPushComponent } from '@angularTopic/services/changeDetection/observable-on-push/observable-on-push.component';
import { ObservableOnPushChildComponent } from '@angularTopic/services/changeDetection/observable-on-push/child/observable-on-push-child/observable-on-push-child.component';
import { AttributeDecoratorComponent } from '@angularTopic/services/changeDetection/attribute-decorator/attribute-decorator.component';
import {
  AttributeDecoratorChildComponent
} from "@angularTopic/services/changeDetection/attribute-decorator/attribute-decorator-child/attribute-decorator-child.component";
import { TopicHeaderComponent } from './components/topic-header/topic-header.component';
import { CustomChangeDetectionComponent } from './components/topics/angular/services/changeDetection/custom-change-detection/custom-change-detection.component';


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
  {path: 'angular/services/getCall', component: GetCallComponent},
  {path: 'angular/services/ownProvider', component: OwnProviderComponent},
  {path: 'angular/services/ownProviderSimplified', component: OwnProviderSimplifiedComponent},
  {path: 'angular/services/hierarchicalInjection', component: HierarchicalInjectionComponent},
  {path: 'angular/services/treeShakeableProvider', component: TreeShakeableProviderComponent},
  {path: 'angular/services/injectionToken', component: InjectionTokenComponent},
  {path: 'angular/services/injectionDecorator', component: InjectionDecoratorsComponent},
  {path: 'angular/changeDetection/defaultChangeDetection', component: DefaultComponent},
  {path: 'angular/changeDetection/onPushChangeDetection', component: OnPushComponent},
  {path: 'angular/changeDetection/observableOnPushChangeDetection', component: ObservableOnPushComponent},
  {path: 'angular/changeDetection/attributeDecorator', component: AttributeDecoratorComponent},
  {path: 'angular/changeDetection/customChangeDetection', component: CustomChangeDetectionComponent},
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
    HostInjectDirective,
    HostComponent,
    HostChildrenComponent,
    ViewEncapsulationComponent,
    ViewEncapsulationChildComponent,
    GetCallComponent,
    OwnProviderComponent,
    OwnProviderSimplifiedComponent,
    HierarchicalInjectionComponent,
    HiChildComponent,
    TreeShakeableProviderComponent,
    InjectionTokenComponent,
    InjectionDecoratorsComponent,
    InjDecChildComponent,
    DefaultComponent,
    OnPushComponent,
    OnPushChildComponent,
    ObservableOnPushComponent,
    ObservableOnPushChildComponent,
    AttributeDecoratorComponent,
    AttributeDecoratorChildComponent,
    TopicHeaderComponent,
    CustomChangeDetectionComponent
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
