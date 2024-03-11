import {Component} from '@angular/core';

@Component({
  selector: 'app-interpolation-syntax',
  templateUrl: './interpolation-syntax.component.html',
  styleUrls: ['./interpolation-syntax.component.css']
})
export class InterpolationSyntaxComponent {
  object: any = {
    property: 'test'
  }

  githubLink: string = "https://github.com/tomisko01/my-demo-platform/blob/main/src/app/components/topics/angular/interpolation-syntax/interpolation-syntax.component.ts";

  openGithubLink(): void {
    window.open(this.githubLink);
  }

}
