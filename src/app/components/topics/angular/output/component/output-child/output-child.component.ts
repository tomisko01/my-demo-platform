import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'output-child',
  templateUrl: './output-child.component.html',
  styleUrl: './output-child.component.css'
})
export class OutputChildComponent {

  @Output()
  childEvent: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  childInputEvent: EventEmitter<string> = new EventEmitter<string>();

  private property: string = "Value from OutputChildComponent";
  private counter: number = 0;

  emitEvent() {
    this.childEvent.emit(this.property + " x" + ++this.counter);
  }

  emitInputEvent(value: string) {
    this.childInputEvent.emit(value);
  }
}
