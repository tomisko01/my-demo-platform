import {Component, computed, effect, input} from '@angular/core';
import {elden} from "../../../../../../typings";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-input-signal-child',
  standalone: true,
  imports: [
    JsonPipe
  ],
  templateUrl: './input-signal-child.component.html',
  styleUrl: './input-signal-child.component.css'
})
export class InputSignalChildComponent {

  item = input<elden.Item>()

  computedSignalFromInput = computed(() => {
    const item = this.item()

    return item?.name.toUpperCase()
  })

  constructor() {
    effect(()=> {
      console.log(`New item value: `, this.item())
    })
  }
}
