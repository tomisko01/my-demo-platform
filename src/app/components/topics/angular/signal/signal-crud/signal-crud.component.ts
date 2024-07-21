import {Component, inject, signal} from '@angular/core';
import {elden} from "../../../../../typings";
import {EldenItemRestService} from "@angularTopic/signal/signal-crud/service/elden-item-rest.service";

@Component({
  selector: 'app-signal-crud',
  standalone: true,
  imports: [],
  templateUrl: './signal-crud.component.html',
  styleUrl: './signal-crud.component.css'
})
export class SignalCRUDComponent {

  items = signal<elden.Item[]>([])

  eldenItemService = inject(EldenItemRestService)


}
