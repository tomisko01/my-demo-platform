import {Component, inject} from '@angular/core';
import {Observable} from "rxjs";
import {elden} from "../../../../../../typings";
import {ActivatedRoute} from "@angular/router";
import {EldenItemObservableService} from "@angularTopic/reactive/service/elden-item-observable.service";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-item-card-single-data-observable',
  standalone: true,
  imports: [
    AsyncPipe,
    NgForOf,
    NgIf
  ],
  templateUrl: './item-card-single-data-observable.component.html',
  styleUrl: './item-card-single-data-observable.component.css'
})
export class ItemCardSingleDataObservableComponent {
  item$: Observable<elden.Item>

  locations$: Observable<elden.Location[]>

  route = inject(ActivatedRoute)
  itemService = inject(EldenItemObservableService)

  constructor() {
    const itemId: string | null = this.route.snapshot.paramMap.get("itemId")
    if (itemId) {
      this.item$ = this.itemService.loadItemById(itemId)
      this.locations$ = this.itemService.loadLocationsByItemId(itemId)
    }

  }
}
