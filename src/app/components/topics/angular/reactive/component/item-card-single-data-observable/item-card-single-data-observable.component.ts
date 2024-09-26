import {Component, inject} from '@angular/core';
import {combineLatest, map, Observable, startWith, tap} from "rxjs";
import {elden} from "../../../../../../typings";
import {ActivatedRoute} from "@angular/router";
import {EldenItemObservableService} from "@angularTopic/reactive/service/elden-item-observable.service";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";

interface ItemData {
  item: elden.Item;
  locations: elden.Location[]
}

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
  // item$: Observable<elden.Item>
  // locations$: Observable<elden.Location[]>

  data$: Observable<ItemData>

  route = inject(ActivatedRoute)
  itemService = inject(EldenItemObservableService)

  constructor() {
    const itemId = this.route.snapshot.paramMap.get("itemId")
    if (itemId) {
      // this.item$ = this.itemService.loadItemById(itemId)
      // this.locations$ = this.itemService.loadLocationsByItemId(itemId)
      const item$ = this.itemService.loadItemById(itemId)
        .pipe(
          startWith(null)
        )
      const locations$ = this.itemService.loadLocationsByItemId(itemId)
        .pipe(
          startWith([])
        )

      this.data$ = combineLatest([item$, locations$])
        .pipe(
          map(([item, locations]) => {
            return {
              item, locations
            }
          }),
          tap(console.log)
        )
    }

  }
}
