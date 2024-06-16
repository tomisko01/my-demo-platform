import {AfterViewChecked, Component} from '@angular/core';
import {HighlightService} from "@service/common/highlight.service";

@Component({
  selector: 'app-content-projection',
  templateUrl: './content-projection.component.html',
  styleUrl: './content-projection.component.css'
})
export class ContentProjectionComponent implements AfterViewChecked {

  private highlighted: Boolean = false;

  object: any = {
    'id': 'id1',
    'name': 'name1'
  }

  projectionCode: string = `<!--PARENT HTML-->
<app-content-projection-child>
  <p>Text to project in child</p>
</app-content-projection-child>

    <!--CHILD HTML-->
<ng-content></ng-content>`;

  projectionMultipleCode: string = `<!--PARENT HTML-->
<app-content-projection-child>
  <p>Text to project in child</p>
</app-content-projection-child>
<app-content-projection-child>
  <p>Another text to project in child</p>
</app-content-projection-child>

    <!--CHILD HTML-->
<ng-content></ng-content>`;

  projectionBySelectCode: string = `<!--PARENT HTML-->
<app-content-projection-child>
  <img ngSrc="assets/img/dark-souls-solaire-praise-the-sun-sticker.jpg" height="100" width="100">
  <p class="class-to-project">Text with class to project in child</p>
  <div>Div inside parent element</div>
</app-content-projection-child>

    <!--CHILD HTML-->
<h5>Project by select</h5>
<ng-content select="img"></ng-content>

<h5>Project by cssClass:</h5>
<ng-content select=".class-to-project"></ng-content>`;



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
