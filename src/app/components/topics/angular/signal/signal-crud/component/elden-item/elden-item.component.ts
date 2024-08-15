import {Component, signal} from '@angular/core';
import {elden} from "../../../../../../../typings";

@Component({
  selector: 'app-elden-item',
  standalone: true,
  imports: [],
  templateUrl: './elden-item.component.html',
  styleUrl: './elden-item.component.css'
})
export class EldenItemComponent {

  item = signal<elden.Item | null>(null)

  locations = signal<elden.Location[]>([])

}
