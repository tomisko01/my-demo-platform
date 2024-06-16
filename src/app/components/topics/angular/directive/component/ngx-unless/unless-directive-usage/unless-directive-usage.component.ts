import {AfterViewChecked, Component} from '@angular/core';
import {HighlightService} from "@service/common/highlight.service";

@Component({
  selector: 'app-unless-directive-usage',
  templateUrl: './unless-directive-usage.component.html',
  styleUrl: './unless-directive-usage.component.css'
})
export class UnlessDirectiveUsageComponent implements AfterViewChecked {

  private highlighted: Boolean = false;
  condition: boolean = true;
  directiveTemplateCode: string = `
<div *ngIf="condition">
  Ameno dorime
</div>

WILL BE REPLACED BY THIS:

<ng-template [ngIf]="condition">
  <div>
    Ameno dorime from template
  </div>
</ng-template>`;

  directiveCode: string = `
@Directive({
  selector: '[appNgxUnless]',
})
export class NgxUnlessDirective {

  private visible: boolean = false;

  @Input()
  set appNgxUnless(condition: boolean) {
    if (!condition && !this.visible) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
      this.visible = true;
    } else if (condition && this.visible) {
      this.viewContainerRef.clear();
      this.visible = false;
    }
  }

  constructor(private templateRef: TemplateRef<any>,
              private viewContainerRef: ViewContainerRef) {
  }
}`;

  directiveUsageTemplateCode: string = `
<ng-template [appNgxUnless]="!condition">
  <div>
    Ameno dorime from ng-template with attribute
  </div>
</ng-template>`;

  directiveUsageCode: string = `
<div *appNgxUnless="!condition">
  Ameno dorime from div with directive
</div>
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
}
