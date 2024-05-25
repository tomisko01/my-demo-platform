import {Component, Inject} from '@angular/core';
import {
  ELDEN_CONFIG,
  ELDEN_CONFIG_TOKEN,
  ExampleConfiguration
} from "@angularTopic/services/dependencyInjection/injection-token/injection-token-config";

@Component({
  selector: 'app-injection-token',
  templateUrl: './injection-token.component.html',
  styleUrl: './injection-token.component.css',
  providers: [
    // {provide: ELDEN_CONFIG_TOKEN, useFactory: () => ELDEN_CONFIG}
    {provide: ELDEN_CONFIG_TOKEN, useValue: ELDEN_CONFIG}
  ]
})
export class InjectionTokenComponent {

  constructor(
    @Inject(ELDEN_CONFIG_TOKEN) private config: ExampleConfiguration) {

    console.log(config);
  }

}
