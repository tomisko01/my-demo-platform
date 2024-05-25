import {Component, Self, SkipSelf} from '@angular/core';
import {MyService} from "@angularTopic/services/dependencyInjection/service/my.service";
import {HierarchicalService} from "@angularTopic/services/dependencyInjection/service/hierarchical.service";
import {
  InjectionDecoratorsComponent
} from "@angularTopic/services/dependencyInjection/injection-decorators/injection-decorators.component";

@Component({
  selector: 'app-inj-dec-child',
  templateUrl: './inj-dec-child.component.html',
  styleUrl: './inj-dec-child.component.css',
  providers: [
    MyService, //with @Self dependency will be local to the component - every component will gets own service instance
    HierarchicalService,
    InjectionDecoratorsComponent
  ]
})
export class InjDecChildComponent {

  constructor(@Self() myService: MyService,   //@Self() disables hierarchical search for dependencies
              @SkipSelf() hierarchyService: HierarchicalService, //@SkipSelf() will omit own providers and force to use one from parent
              //@SkipSelf() injectionDecoratorService: InjectionDecoratorService will throw error because parent component doesn't provide it, even if this component provides it
  ) {
  }
}
