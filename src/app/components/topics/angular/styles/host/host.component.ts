import {AfterViewChecked, Component} from '@angular/core';
import {HighlightService} from "@service/common/highlight.service";

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrl: './host.component.css'
})
export class HostComponent implements AfterViewChecked {

  private highlighted: Boolean = false;

  hostCode: string = `
:host {
  background-color: #46a35e;
}`;

  ngDeepCode: string = `
:host ::ng-deep .deepClass {
  background-color: #616161;
}`;
  themingCode: string = `
  //HTML
<div class="aliceblue-theme">
  <app-host-children>
  </app-host-children>
</div>

  //CSS for component
::ng-deep .aliceblue-theme {
  color: aliceblue;
}
`;

  hostContextCode: string = `
  //HTML
<div class="indian-red-border">
  <app-host-children>
  </app-host-children>
</div>

  //CSS for component
:host-context(.indian-red-border){
  border: solid 1px indianred;
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
}
