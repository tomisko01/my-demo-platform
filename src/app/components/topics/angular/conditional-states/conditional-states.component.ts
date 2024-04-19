import {AfterViewChecked, Component} from '@angular/core';
import {HighlightService} from "@service/HighlightService";

@Component({
  selector: 'app-conditional-states',
  templateUrl: './conditional-states.component.html',
  styleUrl: './conditional-states.component.css'
})
export class ConditionalStatesComponent implements AfterViewChecked{

  githubLink: string = "https://github.com/tomisko01/my-demo-platform/blob/main/src/app/components/topics/angular/conditional-states/conditional-states.component.ts";
  private highlighted: Boolean = false;

  objectToShow: any = {
    desc: "Object to show description",
    type: 'BEGINNER'
  }

  constructor(private highlightService: HighlightService
  ) {
  }

  ngAfterViewChecked(): void {
    if (!this.highlighted) {
      this.highlightService.highlightAll();
      this.highlighted = true;
    }
  }

  openGithubLink(): void {
    window.open(this.githubLink);
  }

  divClasses() {
    return {'beginner': true, 'border-1px': true};
  }

  conditionalDivClasses() {
    return {'beginner': this.objectToShow.type === 'BEGINNER'}
  }
}
