import {Component, inject} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatButton} from "@angular/material/button";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {Observable} from "rxjs";
import {elden} from "../../../../../typings";
import {EldenItemObservableService} from "@angularTopic/reactive/service/elden-item-observable.service";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-observable-master-detail',
  standalone: true,
  imports: [
    MatIcon,
    MatButton,
    MatFormField,
    MatInput,
    NgIf,
    AsyncPipe,
    NgForOf
  ],
  templateUrl: './observable-master-detail.component.html',
  styleUrl: './observable-master-detail.component.css'
})
export class ObservableMasterDetailComponent {

  searchResult$: Observable<elden.Location[]>

  eldenService = inject(EldenItemObservableService)

  onSearch(searchValue: string) {
    this.searchResult$ = this.eldenService.searchLocations(searchValue)
  }
}
