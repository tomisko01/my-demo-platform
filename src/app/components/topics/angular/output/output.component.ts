import {AfterViewChecked, Component} from '@angular/core';
import {HighlightService} from "../../../../service/HighlightService";

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrl: './output.component.css'
})
export class OutputComponent implements AfterViewChecked {

  valueFromChild: string = "";
  valueFromInputChild: string = "";
  githubLink: string = "https://github.com/tomisko01/my-demo-platform/blob/main/src/app/components/topics/angular/interpolation-syntax/interpolation-syntax.component.ts"; //todo change when uploaded

  sourceComponent: string = `
  // PARENT COMPONENT
  handleChildEvent($event: string) {
    this.valueFromChild = $event;
  }

  // CHILD COMPONENT
  @Output()
  childEvent: EventEmitter<string> = new EventEmitter<string>();

  private property: string = "Value from OutputChildComponent";
  private counter: number = 0;

  emitEvent() {
    this.childEvent.emit(this.property + " x" + ++this.counter);
  }
  `;

  sourceHTML: string = `
  // PARENT COMPONENT
  <output-child (childEvent)="handleChildEvent($event)"/>

  // CHILD COMPONENT
  <button (click) = emitEvent()>
    Click to emit event to parent
  </button>
  `;

  highlighted: boolean = false;

  constructor(private highlightService: HighlightService
  ) {
  }

  handleChildEvent($event: string) {
    this.valueFromChild = $event;
  }

  handleInputChildEvent($event: string) {
    this.valueFromInputChild = $event;
  }

  openGithubLink() {
    window.open(this.githubLink);
  }

  ngAfterViewChecked(): void {
    if (!this.highlighted) {
      this.highlightService.highlightAll();
      this.highlighted = true;
    }
  }

  onTabChange() {
    this.highlightService.highlightAll();
  }
}
