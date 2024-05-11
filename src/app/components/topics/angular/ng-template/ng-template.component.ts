import {AfterViewChecked, Component} from '@angular/core';
import {HighlightService} from "@service/HighlightService";

@Component({
  selector: 'app-ng-template',
  templateUrl: './ng-template.component.html',
  styleUrl: './ng-template.component.css'
})
export class NgTemplateComponent implements AfterViewChecked{

  githubLink: string = "https://github.com/tomisko01/my-demo-platform/blob/main/src/app/components/topics/angular/ng-template/ng-template.component.ts";
  private highlighted: Boolean = false;
  ngTemplateCode: string = `
<ng-template #blankImage let-objectName="name">
  <p> {{ objectName }} has no image yet.</p>
  <img src="assets/img/dark-souls-solaire-praise-the-sun-sticker.jpg">
</ng-template>

<div *ngTemplateOutlet="blankImage; context:{name: 'contextName'}">
</div>`;

  ngTemplateContainerCode: string = `
<ng-container *ngTemplateOutlet="blankImage; context:{name: 'secondInstance'}">

</ng-container>`;

  templateAsInput: string = `
  //HTML
<ng-template #blankImage let-objectName="name">
  <p> {{ objectName }} has no image yet.</p>
  <img src="assets/img/dark-souls-solaire-praise-the-sun-sticker.jpg">
</ng-template>

<app-ng-template-child
  [noImageTemplate]="blankImage">
</app-ng-template-child>

  //CHILD COMPONENT
  @Input()
  noImageTemplate: TemplateRef<any>;

  //CHILD HTML
<ng-container *ngTemplateOutlet="noImageTemplate; context: {name: 'Name from child'}">
</ng-container>
`;

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
