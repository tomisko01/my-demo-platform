import {Routes} from "@angular/router";
import {HomeComponent} from "../components/home/home.component";
import * as angularTopic from "../modules/topics/angular/topic.angular";
import {EldenHomeComponent} from "../elden/components/elden-home/elden-home.component";
import {EldenListComponent} from "../elden/components/elden-list/elden-list.component";
import {StandaloneComponent} from "@angularTopic/standalone/standalone.component";
import {DeferComponent} from "@angularTopic/defer/defer.component";
import {SignalComponent} from "@angularTopic/signal/basic/signal.component";
import {ComputedComponent} from "@angularTopic/signal/computed/computed.component";
import {EffectComponent} from "@angularTopic/signal/effect/effect.component";
import {DataServiceComponent} from "@angularTopic/signal/data-service/data-service.component";
import {InputSignalComponent} from "@angularTopic/signal/input-signal/input-signal.component";
import {GetterSetterComponent} from "../components/topics/javascript/getter-setter/getter-setter.component";
import {SignalCRUDComponent} from "@angularTopic/signal/signal-crud/signal-crud.component";
import {SignalLoginComponent} from "@angularTopic/signal/signal-login/signal-login.component";
import {GuardedByLoginComponent} from "@angularTopic/signal/signal-login/guarded-by-login/guarded-by-login.component";
import {isUserAuthenticated} from "@angularTopic/signal/signal-login/guard/signal-login.guard";
import {EldenItemComponent} from "@angularTopic/signal/signal-crud/component/elden-item/elden-item.component";
import {itemResolver} from "@angularTopic/signal/signal-crud/resolver/item.resolver";
import {itemLocationsResolver} from "@angularTopic/signal/signal-crud/resolver/item-locations.resolver";
import {SignalMasterDetailComponent} from "@angularTopic/signal/signal-master-detail/signal-master-detail.component";
import {
  StatelessObservableServiceComponent
} from "@angularTopic/reactive/stateless-observable-service/stateless-observable-service.component";

export const routes: Routes = [
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
  {path: 'angular/pipe/ownPipe', component: angularTopic.OwnPipeComponent},
  {path: 'angular/pipe/i18nPipe', component: angularTopic.I18nComponent},
  {path: 'angular/elements', component: angularTopic.ElementsComponent},
  {path: 'angular/standalone', component: StandaloneComponent},
  {path: 'angular/defer', component: DeferComponent},
  {path: 'angular/signal/basic', component: SignalComponent},
  {path: 'angular/signal/computed', component: ComputedComponent},
  {path: 'angular/signal/effect', component: EffectComponent},
  {path: 'angular/signal/dataService', component: DataServiceComponent},
  {path: 'angular/signal/inputSignal', component: InputSignalComponent},
  {path: 'angular/signal/signalCRUD', component: SignalCRUDComponent},
  {
    'path': 'angular/signal/signalCRUD/item/:itemId',
    component: EldenItemComponent,
    canActivate: [isUserAuthenticated],
    resolve: {
      item: itemResolver,
      locations: itemLocationsResolver
    }
  },
  {path: 'angular/signal/signalAuth', component: SignalLoginComponent},
  {path: 'angular/signal/signalGuardedByAuth', component: GuardedByLoginComponent, canActivate: [isUserAuthenticated]},
  {
    path: 'javascript',
    children: [{
      path: 'getter-setter',
      component: GetterSetterComponent
    }]
  },
  {path: 'angular/signal/signalMasterDetail', component: SignalMasterDetailComponent},
  {path: 'angular/reactivate/statelessObservableService', component: StatelessObservableServiceComponent},
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
