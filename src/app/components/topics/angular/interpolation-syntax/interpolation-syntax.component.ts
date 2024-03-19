import {AfterViewChecked, Component} from '@angular/core';
import {HighlightService} from "../../../../service/HighlightService";

@Component({
  selector: 'app-interpolation-syntax',
  templateUrl: './interpolation-syntax.component.html',
  styleUrls: ['./interpolation-syntax.component.css']
})
export class InterpolationSyntaxComponent implements AfterViewChecked {
  highlighted: boolean = false;

  object: any = {
    property: 'test'
  }

  githubLink: string = "https://github.com/tomisko01/my-demo-platform/blob/main/src/app/components/topics/angular/interpolation-syntax/interpolation-syntax.component.ts";

  sourceComponent: string = `
  object: {
    property: 'test'
  }
  `;

  sourceHTML: string = `
  {{object.property}}
  `;

  constructor(
    private highlightService: HighlightService
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
