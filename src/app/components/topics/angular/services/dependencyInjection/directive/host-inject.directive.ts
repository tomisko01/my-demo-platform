import {Directive, Host} from '@angular/core';
import {MyService} from "@angularTopic/services/dependencyInjection/service/my.service";
import {
  HostDecoratorUsageService
} from "@angularTopic/services/dependencyInjection/service/decorator/host/host-decorator-usage.service";

@Directive({
  selector: '[appHostInject]'
})
export class HostInjectDirective {

  constructor(@Host() private service: HostDecoratorUsageService) { // will search for service provider in host element
    console.log('constructor for directive with myService instance: ' + this.service);
  }

}
