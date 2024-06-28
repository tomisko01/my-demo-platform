import { Component } from '@angular/core';
import {DeferChildComponent} from "@angularTopic/defer/child/defer-child/defer-child.component";

@Component({
  selector: 'app-defer',
  standalone: true,
  imports: [
    DeferChildComponent
  ],
  templateUrl: './defer.component.html',
  styleUrl: './defer.component.css'
})
export class DeferComponent {

}
