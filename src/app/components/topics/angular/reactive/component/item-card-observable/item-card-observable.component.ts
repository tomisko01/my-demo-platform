import {Component, inject} from '@angular/core';
import {elden} from "../../../../../../typings";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {EldenItemObservableService} from "@angularTopic/reactive/service/elden-item-observable.service";

@Component({
  selector: 'app-item-card-observable',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    AsyncPipe
  ],
  templateUrl: './item-card-observable.component.html',
  styleUrl: './item-card-observable.component.css'
})
export class ItemCardObservableComponent {

  item$: Observable<elden.Item>

  locations$: Observable<elden.Location[]>

  route = inject(ActivatedRoute)
  itemService = inject(EldenItemObservableService)

  constructor() {
    const itemId: string | null = this.route.snapshot.paramMap.get("itemId")
    if (itemId) {
      this.item$ = this.itemService.loadItemById(itemId)
    }

  }


}
