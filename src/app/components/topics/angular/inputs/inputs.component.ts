import {Component} from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent {
  githubLink: string = "https://github.com/tomisko01/my-demo-platform/blob/main/src/app/components/topics/angular/interpolation-syntax/interpolation-syntax.component.ts"; //todo change when uploaded
  propertyToPass: string = "property to pass as an input";


  sourceComponent: string = `
  @Input()
  inputProperty: string;
  `;

  sourceHTML: string = `<app-card [inputProperty]="propertyToPass"/>`;

  openGithubLink(): void {
    window.open(this.githubLink);
  }
}
