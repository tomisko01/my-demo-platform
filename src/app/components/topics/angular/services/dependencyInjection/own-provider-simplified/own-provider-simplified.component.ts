import {Component} from '@angular/core';
import {MyService} from "@angularTopic/services/dependencyInjection/service/my.service";

@Component({
  selector: 'app-own-provider-simplified',
  templateUrl: './own-provider-simplified.component.html',
  styleUrl: './own-provider-simplified.component.css',
  providers: [
    /*
    {
      provide: MyService,
      useClass: MyService
    }
    MORE SIMPLIFICATION:
     */
    MyService
  ]
})
export class OwnProviderSimplifiedComponent {

  constructor(private myService: MyService) {
  }

}
