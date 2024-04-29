import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-input-child',
  templateUrl: './input-child.component.html',
  styleUrls: ['./input-child.component.css']
})
export class InputChildComponent {

  @Input()
  inputProperty: string;

  @Input({required: true})
  requiredInput: string;
}
