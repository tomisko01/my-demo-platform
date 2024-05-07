import {AfterViewChecked, Component} from '@angular/core';
import {HighlightService} from "@service/HighlightService";

@Component({
  selector: 'app-content-child',
  templateUrl: './content-child.component.html',
  styleUrl: './content-child.component.css'
})
export class ContentChildComponent implements AfterViewChecked {

  githubLink: string = "https://github.com/tomisko01/my-demo-platform/blob/main/src/app/components/topics/angular/content-child/content-child.component.ts";
  private highlighted: Boolean = false;
  darkSoulsImageUrl: string = 'assets/img/dark-souls-solaire-praise-the-sun-sticker.jpg';

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
