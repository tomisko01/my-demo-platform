import {Component, inject} from '@angular/core';
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {ReactiveLoadingService} from "@angularTopic/reactive/service/reactive-loading.service";

@Component({
  selector: 'app-reactive-loading',
  standalone: true,
  imports: [
    MatProgressSpinner
  ],
  templateUrl: './reactive-loading.component.html',
  styleUrl: './reactive-loading.component.css'
})
export class ReactiveLoadingComponent {

  reactiveLoadingService = inject(ReactiveLoadingService)


}
