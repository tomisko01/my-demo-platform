import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-view-children-child',
  templateUrl: './view-children-child.component.html',
  styleUrl: './view-children-child.component.css'
})
export class ViewChildrenChildComponent {

  @Input()
  id: string;
}
