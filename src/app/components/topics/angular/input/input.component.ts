import {AfterViewChecked, Component} from '@angular/core';
import {HighlightService} from "@service/HighlightService";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements AfterViewChecked {
  propertyToPass: string = "property to pass as an input";

  sourceComponent: string = `
  @Input()
  inputProperty: string;

  @Input({required: true})
  requiredInput: string;
  `;

  highlighted: boolean = false;
  sourceHTML: string = `
<app-card [inputProperty]="propertyToPass"/>`;

  constructor(private highlightService: HighlightService
  ) {
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
