import {Component, Inject, InjectionToken} from '@angular/core';
import {MyService} from "@angularTopic/services/dependencyInjection/service/my.service";
import {HttpClient} from "@angular/common/http";

function myServiceProvider(http: HttpClient): MyService {
  return new MyService(http);
}

const MY_SERVICE = new InjectionToken<MyService>('MyService');

@Component({
  selector: 'app-own-provider',
  templateUrl: './own-provider.component.html',
  styleUrl: './own-provider.component.css',
  providers: [
    {
      provide: MY_SERVICE,
      useFactory: myServiceProvider,
      deps: [HttpClient]
    }
  ]
})
export class OwnProviderComponent {

  constructor(@Inject(MY_SERVICE) private myService: MyService) {

  }

}
