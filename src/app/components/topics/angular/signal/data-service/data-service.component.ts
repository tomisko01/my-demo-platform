import {Component, computed} from '@angular/core';
import {SignalDataService} from "@angularTopic/signal/data-service/service/signal-data.service";

@Component({
  selector: 'app-data-service',
  standalone: true,
  imports: [],
  templateUrl: './data-service.component.html',
  styleUrl: './data-service.component.css'
})
export class DataServiceComponent {

  componentSignal = computed(() => {
    const signalFromService = this.signalDataService.counter()

    return signalFromService * 10
  });


  constructor(
    public signalDataService: SignalDataService) {
  }

  increment() {
    this.signalDataService.incrementCounter()
  }
}
