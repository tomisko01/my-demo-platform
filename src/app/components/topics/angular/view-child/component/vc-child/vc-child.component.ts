import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-vc-child',
  templateUrl: './vc-child.component.html',
  styleUrl: './vc-child.component.css'
})
export class VcChildComponent {

  @Input()
  property: any;

  childProperty: string = 'property in child';


  methodInChild(): string {
    return 'method in child executed';
  }
}
