import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

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


}
