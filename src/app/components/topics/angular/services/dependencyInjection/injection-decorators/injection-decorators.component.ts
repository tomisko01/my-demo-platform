import {Component, Optional} from '@angular/core';
import {NotProvidedService} from "@angularTopic/services/dependencyInjection/service/decorator/not-provided.service";
import {MyService} from "@angularTopic/services/dependencyInjection/service/my.service";
import {HierarchicalService} from "@angularTopic/services/dependencyInjection/service/hierarchical.service";

@Component({
  selector: 'app-injection-decorators',
  templateUrl: './injection-decorators.component.html',
  styleUrl: './injection-decorators.component.css',
  providers: [MyService, HierarchicalService]
})
export class InjectionDecoratorsComponent {

  constructor(@Optional() private optional: NotProvidedService) { //will not throw error if not found
  }

}
