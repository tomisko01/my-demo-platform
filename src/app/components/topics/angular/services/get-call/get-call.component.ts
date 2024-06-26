import {AfterViewChecked, Component, OnInit} from '@angular/core';
import {HighlightService} from "@service/common/highlight.service";
import {Observable} from "rxjs";
import {elden} from "../../../../../typings";
import {EldenItemsService} from "@angularTopic/services/get-call/service/elden-items.service";


@Component({
  selector: 'app-get-call',
  templateUrl: './get-call.component.html',
  styleUrl: './get-call.component.css'
})
export class GetCallComponent implements OnInit, AfterViewChecked {

  private highlighted: Boolean = false;
  private wolneLekturyAPI: string = 'https://wolnelektury.pl/api/kinds/';

  list: any[];

  itemList$: Observable<elden.Response>;
  itemList: elden.Item[];

  constructor(private highlightService: HighlightService,
              private eldenInvoker: EldenItemsService,
  ) {
  }

  ngAfterViewChecked(): void {
    if (!this.highlighted) {
      this.highlightService.highlightAll();
      this.highlighted = true;
    }
  }

  ngOnInit(): void {
    this.asyncGet();
  }

  private asyncGet() {
    this.eldenInvoker.loadItems()
      .subscribe(eldenItems => this.itemList = eldenItems);
  }
}
