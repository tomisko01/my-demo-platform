import {AfterViewChecked, Component, ElementRef, ViewChild} from '@angular/core';
import {HighlightService} from "@service/HighlightService";
import {VcChildComponent} from "./component/vc-child/vc-child.component";

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.css'
})
export class ViewChildComponent implements AfterViewChecked {

  githubLink: string = "https://github.com/tomisko01/my-demo-platform/blob/main/src/app/components/topics/angular/view-child/view-child.component.ts";
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

  childByTemplateRefAfterViewChecked: any;
  childElementRefAfterViewChecked: any;
  childComponentAsElementRefAfterViewChecked: any;

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

  constructor(private highlightService: HighlightService
  ) {
  }

  ngAfterViewChecked(): void {
    if (!this.highlighted) {
      this.highlightService.highlightAll();
      this.highlighted = true;
    }
    this.childByTemplateRefAfterViewChecked = this.childByTemplateRef;
    this.childElementRefAfterViewChecked = this.childElementRef;
    this.childComponentAsElementRefAfterViewChecked = this.childComponentAsElementRef;
  }

  openGithubLink(): void {
    window.open(this.githubLink);
  }
}
