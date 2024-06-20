import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MyMatCommonModule} from 'src/app/modules/mat-common/my-mat-common.module';
import {NewProjectComponent} from "@angularTopic/new-project/new-project.component";
import {InterpolationSyntaxComponent} from "@angularTopic/interpolation-syntax/interpolation-syntax.component";
import {InputPropertySyntaxComponent} from "@angularTopic/input-property-syntax/input-property-syntax.component";
import {InputComponent} from "@angularTopic/input/input.component";
import {InputChildComponent} from "@angularTopic/input/component/input-child/input-child.component";
import {OutputComponent} from "@angularTopic/output/output.component";
import {OutputChildComponent} from "@angularTopic/output/component/output-child/output-child.component";
import {CfForComponent} from "@angularTopic/control-flow/cf-for/cf-for.component";
import {CfForChildComponent} from "@angularTopic/control-flow/cf-for/component/cf-for-child/cf-for-child.component";
import {CfIfComponent} from "@angularTopic/control-flow/cf-if/cf-if.component";
import {ConditionalStylesComponent} from "@angularTopic/conditional-styles/conditional-styles.component";
import {CfSwitchComponent} from "@angularTopic/control-flow/cf-switch/cf-switch.component";
import {NgContainerComponent} from "@angularTopic/ng-container/ng-container.component";
import {PipeComponent} from "@angularTopic/pipe/pipe.component";
import {ViewChildComponent} from "@angularTopic/view-child/view-child.component";
import {VcChildComponent} from "@angularTopic/view-child/component/vc-child/vc-child.component";
import {ViewChildrenComponent} from "@angularTopic/view-children/view-children.component";
import {
  ViewChildrenChildComponent
} from "@angularTopic/view-children/component/view-children-child/view-children-child.component";
import {ContentProjectionComponent} from "@angularTopic/content-projection/content-projection.component";
import {
  ContentProjectionChildComponent
} from "@angularTopic/content-projection/component/content-projection-child/content-projection-child.component";
import {ContentChildComponent} from "@angularTopic/content-child/content-child.component";
import {
  ContentChildChildComponent
} from "@angularTopic/content-child/component/content-child-child/content-child-child.component";
import {
  ContentChildImageComponent
} from "@angularTopic/content-child/component/content-child-image/content-child-image.component";
import {NgTemplateComponent} from "@angularTopic/ng-template/ng-template.component";
import {
  NgTemplateChildComponent
} from "@angularTopic/ng-template/component/ng-template-child/ng-template-child.component";
import {
  HighlightedDirectiveUsageComponent
} from "@angularTopic/directive/component/highlighted-directive-usage/highlighted-directive-usage.component";
import {HighlightedDirective} from "@angularTopic/directive/highlighted.directive";
import {
  HighlightedDirectiveChildComponent
} from "@angularTopic/directive/component/highlighted-directive-child/highlighted-directive-child.component";
import {NgxUnlessDirective} from "@angularTopic/directive/ngx-unless.directive";
import {
  UnlessDirectiveUsageComponent
} from "@angularTopic/directive/component/ngx-unless/unless-directive-usage/unless-directive-usage.component";
import {HostComponent} from "@angularTopic/styles/host/host.component";
import {HostChildrenComponent} from "@angularTopic/styles/host/component/host-children/host-children.component";
import {ViewEncapsulationComponent} from "@angularTopic/styles/view-encapsulation/view-encapsulation.component";
import {
  ViewEncapsulationChildComponent
} from "@angularTopic/styles/view-encapsulation/component/view-encapsulation-child/view-encapsulation-child.component";
import {TopicHeaderComponent} from "../../../components/topic-header/topic-header.component";
import {LifecycleHooksModule} from "./lifecycle-hooks/lifecycle-hooks.module";
import {ChangeDetectionModule} from "./change-detection/change-detection.module";
import {InjectionModule} from "./injection/injection.module";
import {OwnPipeComponent} from "@angularTopic/pipe/own-pipe/component/own-pipe/own-pipe.component";
import {OwnPipePipe} from "@angularTopic/pipe/own-pipe/pipe-impl/own-pipe.pipe";
import {OwnImpurePipePipe} from "@angularTopic/pipe/own-pipe/pipe-impl/own-impure-pipe.pipe";
import {I18nComponent} from "@angularTopic/pipe/i18n/i18n.component";

@NgModule({
  declarations: [
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
    OwnPipeComponent,
    OwnPipePipe,
    I18nComponent,
  ],
  exports: [
    TopicHeaderComponent
  ],
  imports: [
    CommonModule,
    MyMatCommonModule,
    LifecycleHooksModule,
    ChangeDetectionModule,
    InjectionModule,
    OwnImpurePipePipe,
  ]
})
export class AngularTopicModule {
}
