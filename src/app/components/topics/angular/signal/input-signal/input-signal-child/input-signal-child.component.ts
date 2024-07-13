import {Component, computed, input} from '@angular/core';
import {elden} from "../../../../../../typings";
import {JsonPipe} from "@angular/common";
import {SignalComponent} from "@angularTopic/signal/basic/signal.component";

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

}
