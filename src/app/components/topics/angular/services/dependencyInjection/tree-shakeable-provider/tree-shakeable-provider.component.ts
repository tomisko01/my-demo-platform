import {Component} from '@angular/core';
import {MyService} from "@angularTopic/services/dependencyInjection/service/my.service";
import {TreeShakeableService} from "@angularTopic/services/dependencyInjection/service/tree/tree-shakeable.service";

@Component({
  selector: 'app-tree-shakeable-provider',
  templateUrl: './tree-shakeable-provider.component.html',
  styleUrl: './tree-shakeable-provider.component.css',
  providers: [MyService]   // service will be added to bundle even if it's not used!
})
export class TreeShakeableProviderComponent {

  constructor(
    private myService: MyService) {
  }

}
