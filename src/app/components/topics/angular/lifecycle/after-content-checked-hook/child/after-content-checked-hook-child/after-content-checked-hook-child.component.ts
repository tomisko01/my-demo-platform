import {AfterContentChecked, Component, Input} from '@angular/core';

@Component({
  selector: 'app-after-content-checked-hook-child',
  templateUrl: './after-content-checked-hook-child.component.html',
  styleUrl: './after-content-checked-hook-child.component.css'
})
export class AfterContentCheckedHookChildComponent implements AfterContentChecked {
  @Input()
  inputProperty: string;

  @Input()
  inputObject: any;

  ngAfterContentChecked(): void {
    console.log('child - ngAfterContentChecked');
    //this.inputObject = {id: 'a', name: 'b'}; not triggering error
    this.inputObject.name = 'child - ngAfterContentChecked'; // this will cause error, we cannot change value after it was checked (and used) on different component!
    //this.inputObject.name is directly used in content part, so it was checked firstly for changes, and after that this method was called
  }

}
