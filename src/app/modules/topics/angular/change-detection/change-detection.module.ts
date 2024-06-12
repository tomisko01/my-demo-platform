import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DefaultComponent} from "@angularTopic/services/changeDetection/default/default.component";
import {OnPushComponent} from "@angularTopic/services/changeDetection/on-push/on-push.component";
import {OnPushChildComponent} from "@angularTopic/services/changeDetection/on-push/child/on-push-child.component";
import {
  ObservableOnPushComponent
} from "@angularTopic/services/changeDetection/observable-on-push/observable-on-push.component";
import {
  ObservableOnPushChildComponent
} from "@angularTopic/services/changeDetection/observable-on-push/child/observable-on-push-child/observable-on-push-child.component";
import {
  AttributeDecoratorComponent
} from "@angularTopic/services/changeDetection/attribute-decorator/attribute-decorator.component";
import {
  AttributeDecoratorChildComponent
} from "@angularTopic/services/changeDetection/attribute-decorator/attribute-decorator-child/attribute-decorator-child.component";
import {
  CustomChangeDetectionComponent
} from "@angularTopic/services/changeDetection/custom-change-detection/custom-change-detection.component";
import {MyMatCommonModule} from "../../../../mat-common/my-mat-common.module";


@NgModule({
  declarations: [
    DefaultComponent,
    OnPushComponent,
    OnPushChildComponent,
    ObservableOnPushComponent,
    ObservableOnPushChildComponent,
    AttributeDecoratorComponent,
    AttributeDecoratorChildComponent,
    CustomChangeDetectionComponent,
  ],
  imports: [
    CommonModule,
    MyMatCommonModule
  ]
})
export class ChangeDetectionModule {
}
