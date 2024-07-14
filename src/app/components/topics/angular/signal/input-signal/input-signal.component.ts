import {Component} from '@angular/core';
import {items} from "../../../../../constants/mocks/EldenItemMock";
import {JsonPipe} from "@angular/common";
import {MatButton} from "@angular/material/button";
import {
  InputSignalChildComponent
} from "@angularTopic/signal/input-signal/input-signal-child/input-signal-child.component";
import {MatDivider} from "@angular/material/divider";

@Component({
  selector: 'app-input-signal',
  standalone: true,
  imports: [
    JsonPipe,
    MatButton,
    InputSignalChildComponent,
    MatDivider
  ],
  templateUrl: './input-signal.component.html',
  styleUrl: './input-signal.component.css'
})
export class InputSignalComponent {

  counter = 0;

  itemToSend = items[this.counter]

  protected readonly items = items;

  incrementCounter() {
    if (this.counter === items.length - 1) {
      this.counter = 0
    } else {
      this.counter++
    }

    this.itemToSend = items[this.counter]
  }
}
