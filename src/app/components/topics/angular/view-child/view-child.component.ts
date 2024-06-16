import {AfterContentChecked, ChangeDetectorRef, Component, ElementRef, ViewChild} from '@angular/core';
import {HighlightService} from "@service/common/highlight.service";
import {VcChildComponent} from "./component/vc-child/vc-child.component";

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.css',
})
export class ViewChildComponent implements AfterContentChecked {

  private highlighted: Boolean = false;

  propertyToPass: any = {
    id: 'id001',
    name: 'name01',
    ameno: 'dorime'
  }

  propertyToOtherChildPass: any = {
    id: 'id002',
    name: 'name02',
    ameno: 'lancire'
  }

  @ViewChild(VcChildComponent)
  child: VcChildComponent;

  @ViewChild('childRef')
  childByTemplateRef: VcChildComponent;

  @ViewChild('otherChildRef')
  otherChildByTemplateRef: VcChildComponent;

  @ViewChild('container')
  childElementRef: ElementRef;

  @ViewChild('childToShowAsElement', {read: ElementRef})
  childComponentAsElementRef: ElementRef;

  constructor(private highlightService: HighlightService,
              private ref: ChangeDetectorRef
  ) {
  }

  ngAfterContentChecked(): void {
    this.ref.detectChanges();

    if (!this.highlighted) {
      this.highlightService.highlightAll();
      this.highlighted = true;
    }
  }
}
