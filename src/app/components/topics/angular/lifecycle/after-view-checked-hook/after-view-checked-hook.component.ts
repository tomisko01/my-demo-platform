import {AfterViewChecked, ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-after-view-checked-hook',
  templateUrl: './after-view-checked-hook.component.html',
  styleUrl: './after-view-checked-hook.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AfterViewCheckedHookComponent implements AfterViewChecked {

  title: string = 'Initial Value';

  object: any = {
    id: '001',
    name: 'Initial Name',
  }

  ngAfterViewChecked(): void {
    // will be called after angular change detection and afterContentChecked
    // good use-case: when view has changed, and we want scroll to bottom or change focus to element which wasn't visible on init
    console.log('parent - ngAfterViewChecked');

    /*
    when: DEFAULT change detection
    cannot change value used on view, after it was checked
    */
    this.title = 'ngAfterViewChecked'; //will cause error for DEFAULT

    this.object.name = 'after view checked'; //will cause error for DEFAULT

    /*
    when: ChangeDetectionStrategy.OnPush
    angular will not react on changes, and we will se initial values, without an error
    */
  }


}
