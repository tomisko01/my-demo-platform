import {AfterViewChecked, Component, ViewEncapsulation} from '@angular/core';
import {HighlightService} from "@service/HighlightService";

@Component({
  selector: 'app-view-encapsulation',
  templateUrl: './view-encapsulation.component.html',
  styleUrl: './view-encapsulation.component.css'})
export class ViewEncapsulationComponent implements AfterViewChecked {

  githubLink: string = "https://github.com/tomisko01/my-demo-platform/blob/main/src/app/components/topics/angular/styles/view-encapsulation/view-encapsulation.component.ts";
  private highlighted: Boolean = false;

  emulatedConde: string = `
@Component({
  ...
  encapsulation: ViewEncapsulation.Emulated
})`;


  constructor(private highlightService: HighlightService
  ) {
  }

  openGithubLink(): void {
    window.open(this.githubLink);
  }

  ngAfterViewChecked(): void {
    if (!this.highlighted) {
      this.highlightService.highlightAll();
      this.highlighted = true;
    }
  }

}
