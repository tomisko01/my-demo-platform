import { Component } from '@angular/core';

@Component({
  selector: 'app-input-property-syntax',
  templateUrl: './input-property-syntax.component.html',
  styleUrls: ['./input-property-syntax.component.css']
})
export class InputPropertySyntaxComponent {
  githubLink: string = "https://github.com/tomisko01/my-demo-platform/blob/main/src/app/components/topics/angular/interpolation-syntax/interpolation-syntax.component.ts"; //todo change when uploaded

  title: string = 'title';
  titleExample: string = "title example";

  openGithubLink(): void {
    window.open(this.githubLink);
  }

  reloadTitle(value: string) {
    this.title = value;
  }
}
