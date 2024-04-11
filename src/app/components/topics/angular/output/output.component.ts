import {Component} from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrl: './output.component.css'
})
export class OutputComponent {

  valueFromChild: string = "";
  valueFromInputChild: string = "";
  githubLink: string = "https://github.com/tomisko01/my-demo-platform/blob/main/src/app/components/topics/angular/interpolation-syntax/interpolation-syntax.component.ts"; //todo change when uploaded

  handleChildEvent($event: string) {
    this.valueFromChild = $event;
  }

  handleInputChildEvent($event: string) {
    this.valueFromInputChild = $event;
  }

  openGithubLink() {
    window.open(this.githubLink);
  }
}
