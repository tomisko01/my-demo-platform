import { Component } from '@angular/core';
import {DeferChildComponent} from "@angularTopic/defer/child/defer-child/defer-child.component";
import {MatDivider} from "@angular/material/divider";

@Component({
  selector: 'app-defer',
  standalone: true,
  imports: [
    DeferChildComponent,
    MatDivider
  ],
  templateUrl: './defer.component.html',
  styleUrl: './defer.component.css'
})
export class DeferComponent {

}
