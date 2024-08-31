import {Component, inject} from '@angular/core';
import {EldenItemObservableService} from "@angularTopic/reactive/service/elden-item-observable.service";

@Component({
  selector: 'app-stateless-observable-service',
  standalone: true,
  imports: [],
  templateUrl: './stateless-observable-service.component.html',
  styleUrl: './stateless-observable-service.component.css'
})
export class StatelessObservableServiceComponent {

  eldenItemObservableService = inject(EldenItemObservableService)

  constructor() {
    this.eldenItemObservableService.loadAllItems()
      .subscribe((items) => console.log(items))
  }

}
