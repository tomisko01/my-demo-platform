import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-view-encapsulation-child',
  templateUrl: './view-encapsulation-child.component.html',
  styleUrl: './view-encapsulation-child.component.css',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ViewEncapsulationChildComponent {

}
