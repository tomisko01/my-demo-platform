import {AfterViewChecked, Component, ViewEncapsulation} from '@angular/core';
import {HighlightService} from "@service/HighlightService";

@Component({
  selector: 'app-view-encapsulation',
  templateUrl: './view-encapsulation.component.html',
  styleUrl: './view-encapsulation.component.css'})
export class ViewEncapsulationComponent implements AfterViewChecked {

  private highlighted: Boolean = false;

  emulatedConde: string = `
@Component({
  ...
  encapsulation: ViewEncapsulation.Emulated
})`;


  constructor(private highlightService: HighlightService
  ) {
  }

  ngAfterViewChecked(): void {
    if (!this.highlighted) {
      this.highlightService.highlightAll();
      this.highlighted = true;
    }
  }

}
