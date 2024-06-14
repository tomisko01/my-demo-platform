import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  AfterContentCheckedHookComponent
} from "@angularTopic/lifecycle/after-content-checked-hook/after-content-checked-hook.component";
import {MyMatCommonModule} from "../../../../mat-common/my-mat-common.module";
import {
  AfterContentCheckedHookChildComponent
} from "@angularTopic/lifecycle/after-content-checked-hook/child/after-content-checked-hook-child/after-content-checked-hook-child.component";
import {
  AfterContentCheckedHookChildContentComponent
} from "@angularTopic/lifecycle/after-content-checked-hook/child/after-content-checked-hook-child-content/after-content-checked-hook-child-content.component";
import {OnInitHookComponent} from "@angularTopic/lifecycle/on-init-hook/on-init-hook.component";
import {
  OnInitHookChildComponent
} from "@angularTopic/lifecycle/on-init-hook/child/on-init-hook-child/on-init-hook-child.component";
import {OnDestroyHookComponent} from "@angularTopic/lifecycle/on-destroy-hook/on-destroy-hook.component";
import {
  OnDestroyHookChildComponent
} from "@angularTopic/lifecycle/on-destroy-hook/child/on-destroy-hook-child/on-destroy-hook-child.component";
import {OnChangesHookComponent} from "@angularTopic/lifecycle/on-changes-hook/on-changes-hook.component";
import {
  OnChangesHookChildComponent
} from "@angularTopic/lifecycle/on-changes-hook/child/on-changes-hook-child/on-changes-hook-child.component";
import {
  AfterViewCheckedHookComponent
} from "@angularTopic/lifecycle/after-view-checked-hook/after-view-checked-hook.component";
import {LifecycleOverviewComponent} from "@angularTopic/lifecycle/lifecycle-overview/lifecycle-overview.component";
import {
  LifecycleOverviewChildComponent
} from "@angularTopic/lifecycle/lifecycle-overview/lifecycle-overview-child/lifecycle-overview-child.component";


@NgModule({
  declarations: [
    AfterContentCheckedHookComponent,
    AfterContentCheckedHookChildComponent,
    AfterContentCheckedHookChildContentComponent,
    OnInitHookComponent,
    OnInitHookChildComponent,
    OnDestroyHookComponent,
    OnDestroyHookChildComponent,
    OnChangesHookComponent,
    OnChangesHookChildComponent,
    AfterViewCheckedHookComponent,
    LifecycleOverviewComponent,
    LifecycleOverviewChildComponent,
  ],
  imports: [
    CommonModule,
    MyMatCommonModule
  ],
  exports: [
  ],
})
export class LifecycleHooksModule {
}
