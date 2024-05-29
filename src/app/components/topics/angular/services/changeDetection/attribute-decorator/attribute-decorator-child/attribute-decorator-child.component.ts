import {Attribute, Component, Input} from '@angular/core';

@Component({
  selector: 'app-attribute-decorator-child',
  templateUrl: './attribute-decorator-child.component.html',
  styleUrl: './attribute-decorator-child.component.css'
})
export class AttributeDecoratorChildComponent {

  @Input()
  name: string;

  typeToShow: string;

  constructor(@Attribute('type') private type: string) { // @Attribute() will prevent of checking changes on this, one time binding
    this.typeToShow = type;
  }

}
