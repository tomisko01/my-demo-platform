import {ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, OnInit} from '@angular/core';
import {elden} from "../../../../../../typings";
import {EldenItemsService} from "@angularTopic/services/get-call/service/elden-items.service";

@Component({
  selector: 'app-custom-change-detection',
  templateUrl: './custom-change-detection.component.html',
  styleUrl: './custom-change-detection.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush // on push will not trigger updates from subscribing to observable
})
export class CustomChangeDetectionComponent implements OnInit, DoCheck {

  items: elden.Item[];

  constructor(private eldenService: EldenItemsService,
              private changeDetectorRef: ChangeDetectorRef) //evry component has it own change detector
  {
  }

  ngOnInit(): void {
    this.eldenService.loadItems()
      .subscribe(items => {
        this.items = items;

        this.changeDetectorRef.markForCheck(); //trigger refresh
        //good use-case for that: when we are getting data from backend few times a second,
        //instead of refreshing view after every call, do it once after all data is resolved
      });
  }

  ngDoCheck(): void { //will be called every time when angular is doing change detection
    //we can remove markForCheck() from subscribe and do it here
    //best place for custom change detection logic

    console.log('ngDoCheck');

    if (this.items) {
      this.changeDetectorRef.markForCheck()
    }
  }
}
