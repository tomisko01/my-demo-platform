import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {EldenItemsService} from "@angularTopic/services/get-call/service/elden-items.service";
import {elden} from "../../../../../../typings";

@Component({
  selector: 'app-observable-on-push',
  templateUrl: './observable-on-push.component.html',
  styleUrl: './observable-on-push.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ObservableOnPushComponent implements OnInit {

  eldenItems$: Observable<elden.Item[]>;
  eldenItems: elden.Item[];

  constructor(private eldenItemsService: EldenItemsService) {
  }

  ngOnInit(): void {
    //  this.eldenItems$ = this.eldenItemsService.loadItems(); // this will work

    this.eldenItemsService.loadItems()
      .subscribe(items => this.eldenItems = items); //this shouldn't be working TODO check why it's working
  }


}
