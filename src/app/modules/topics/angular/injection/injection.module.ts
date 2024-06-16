import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GetCallComponent} from "@angularTopic/services/get-call/get-call.component";
import {OwnProviderComponent} from "@angularTopic/services/dependencyInjection/own-provider/own-provider.component";
import {
  OwnProviderSimplifiedComponent
} from "@angularTopic/services/dependencyInjection/own-provider-simplified/own-provider-simplified.component";
import {
  HierarchicalInjectionComponent
} from "@angularTopic/services/dependencyInjection/hierarchical-injection/hierarchical-injection.component";
import {
  HiChildComponent
} from "@angularTopic/services/dependencyInjection/hierarchical-injection/component/hi-child/hi-child.component";
import {
  TreeShakeableProviderComponent
} from "@angularTopic/services/dependencyInjection/tree-shakeable-provider/tree-shakeable-provider.component";
import {
  InjectionTokenComponent
} from "@angularTopic/services/dependencyInjection/injection-token/injection-token.component";
import {
  InjectionDecoratorsComponent
} from "@angularTopic/services/dependencyInjection/injection-decorators/injection-decorators.component";
import {
  InjDecChildComponent
} from "@angularTopic/services/dependencyInjection/injection-decorators/child/inj-dec-child/inj-dec-child.component";
import {HostInjectDirective} from "@angularTopic/services/dependencyInjection/directive/host-inject.directive";
import {MyMatCommonModule} from "../../../mat-common/my-mat-common.module";


@NgModule({
  declarations: [
    GetCallComponent,
    OwnProviderComponent,
    OwnProviderSimplifiedComponent,
    HierarchicalInjectionComponent,
    HiChildComponent,
    TreeShakeableProviderComponent,
    InjectionTokenComponent,
    InjectionDecoratorsComponent,
    InjDecChildComponent,
    HostInjectDirective
  ],
  imports: [
    CommonModule,
    MyMatCommonModule
  ]
})
export class InjectionModule {
}
