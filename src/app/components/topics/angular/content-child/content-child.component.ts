import {AfterViewChecked, Component} from '@angular/core';
import {HighlightService} from "@service/common/highlight.service";

@Component({
  selector: 'app-content-child',
  templateUrl: './content-child.component.html',
  styleUrl: './content-child.component.css'
})
export class ContentChildComponent implements AfterViewChecked {

  private highlighted: Boolean = false;
  darkSoulsImageUrl: string = 'assets/img/dark-souls-solaire-praise-the-sun-sticker.jpg';
  contentChildCode: string =`
  <!-- HTML -->
<app-content-child-child>
  <div #divElement>
    Text inside div
  </div>
</app-content-child-child>

  <!--COMPONENT -->
@ContentChild('divElement')
divElement: ElementRef;`;

  contentChildComponentCode: string = `
  <!-- HTML -->
<app-content-child-child>
  <app-content-child-image
    [imageSrc]="darkSoulsImageUrl">
  </app-content-child-image>
</app-content-child-child>

  <!-- HTML CHILD -->
<ng-content select="app-content-child-image">
</ng-content>

  <!-- COMPONENT CHILD -->
@ContentChild(ContentChildImageComponent)
content: ContentChildImageComponent;`;

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
