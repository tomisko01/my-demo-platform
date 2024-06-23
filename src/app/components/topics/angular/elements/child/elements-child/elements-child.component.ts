import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-elements-child',
  templateUrl: './elements-child.component.html',
  styleUrl: './elements-child.component.css'
})
export class ElementsChildComponent {

  @Input()
  title: string;

}
