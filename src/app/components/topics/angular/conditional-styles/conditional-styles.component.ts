import {AfterViewChecked, Component} from '@angular/core';
import {HighlightService} from "@service/HighlightService";

@Component({
  selector: 'app-conditional-styles',
  templateUrl: './conditional-styles.component.html',
  styleUrl: './conditional-styles.component.css'
})
export class ConditionalStylesComponent implements AfterViewChecked{

  githubLink: string = "https://github.com/tomisko01/my-demo-platform/blob/main/src/app/components/topics/angular/conditional-styles/conditional-styles.component.ts";
  private highlighted: Boolean = false;

  objectToShow: any = {
    desc: "Object to show description",
    type: 'BEGINNER'
  }

  ngClassSimpleCode: string =`<div [ngClass]="'beginner'">
    Sample text with style
</div>`;
  ngClassListCode: string =`<div [ngClass]="'beginner border-1px'">
  Sample text with list of styles
</div>`;
  ngClassList2Code: string =`<div [ngClass]="['beginner','border-1px']">
  Sample text with list of styles
</div>`;
  ngClassObjectCode: string = `<div [ngClass]="{'beginner': true, 'border-1px': true}">
  Sample text with configuration object of styles
</div>`;
  ngClassMethodCode: string = `
//HTML
<div [ngClass]="divClasses()">
  Sample text with configuration object of styles from method
</div>

//COMPONENT
divClasses() {
    return {'beginner': true, 'border-1px': true};
}`;
  ngClassConditionMethodCode: string = `
//HTML
<div [ngClass]="conditionalDivClasses()">
  {{objectToShow.desc}}
</div>

//COMPONENT
conditionalDivClasses() {
    return {'beginner': this.objectToShow.type === 'BEGINNER'}
}`;
  stylesCode: string = `
<div [style.text-decoration]="'underline'">
  {{objectToShow.desc}}
</div>`;
  ngStylesCode: string =`<div [ngStyle]="{'text-decoration': 'underline'}">
  {{objectToShow.desc}}
</div>`;
  ngStylesMethodCode: string = `
//HTML
<div [ngStyle]="getStyles()">
  {{objectToShow.desc}}
</div>

//COMPONENT
getStyles() {
    return {'text-decoration': 'underline'};
}`;

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

  getStyles() {
    return {'text-decoration': 'underline'};
  }
}
