import {AfterViewChecked, Component} from '@angular/core';
import {HighlightService} from "@service/HighlightService";

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrl: './ng-container.component.css'
})
export class NgContainerComponent implements AfterViewChecked {
  githubLink: string = "https://github.com/tomisko01/my-demo-platform/blob/main/src/app/components/topics/angular/ng-container/ng-container.component.ts";
  private highlighted: Boolean = false;
  objectToCheck: any =
    {
      foo: "foo",
      bar: "bar"
    };
  ngContainerCode: string = `<ng-container *ngIf="objectToCheck">
        <div> {{objectToCheck | json }}</div>
    </ng-container>`;

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
}
