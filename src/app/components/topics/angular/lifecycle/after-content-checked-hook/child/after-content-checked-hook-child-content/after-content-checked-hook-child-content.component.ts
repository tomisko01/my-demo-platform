import {AfterContentChecked, Component, Input} from '@angular/core';

@Component({
  selector: 'app-after-content-checked-hook-child-content',
  templateUrl: './after-content-checked-hook-child-content.component.html',
  styleUrl: './after-content-checked-hook-child-content.component.css'
})
export class AfterContentCheckedHookChildContentComponent implements AfterContentChecked {
  @Input() inputProperty: string;
  @Input() inputObjectProperty: string;

  ngAfterContentChecked(): void {
    console.log('Content Child - ngAfterContentChecked');
  }


}
