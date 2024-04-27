import {Component, Input} from '@angular/core';
//TODO RENAME IT
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input()
  inputProperty: string;

  @Input({required: true})
  requiredInput: string;
}
