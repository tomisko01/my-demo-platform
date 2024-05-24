import { Component } from '@angular/core';
import {MyService} from "@angularTopic/services/dependencyInjection/service/my.service";
import {HierarchicalService} from "@angularTopic/services/dependencyInjection/service/hierarchical.service";

@Component({
  selector: 'app-hi-child',
  templateUrl: './hi-child.component.html',
  styleUrl: './hi-child.component.css',
  providers: [MyService]
})
export class HiChildComponent {

  constructor(private myService: MyService,
              private mySecondService: HierarchicalService) {
  }

}
