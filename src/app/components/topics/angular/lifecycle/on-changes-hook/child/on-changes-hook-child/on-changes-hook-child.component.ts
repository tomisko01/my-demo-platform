import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-on-changes-hook-child',
  templateUrl: './on-changes-hook-child.component.html',
  styleUrl: './on-changes-hook-child.component.css'
})
export class OnChangesHookChildComponent implements OnChanges{

  @Input() object: any;

  //do something when 1 of the inputs changes
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Child - ngOnChanges');
    console.log(changes);
  }

}
