import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-cf-for-child',
  templateUrl: './cf-for-child.component.html',
  styleUrl: './cf-for-child.component.css'
})
export class CfForChildComponent {

  @Input()
  id: string;

  @Input()
  name: string;
}
