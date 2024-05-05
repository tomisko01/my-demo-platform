import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  QueryList,
  ViewChildren
} from '@angular/core';
import {HighlightService} from "@service/HighlightService";
import {
  ViewChildrenChildComponent
} from "@angularTopic/view-children/component/view-children-child/view-children-child.component";
import * as _ from "lodash";

@Component({
  selector: 'app-view-children',
  templateUrl: './view-children.component.html',
  styleUrl: './view-children.component.css'
})
export class ViewChildrenComponent implements AfterViewChecked, AfterViewInit {

  githubLink: string = "https://github.com/tomisko01/my-demo-platform/blob/main/src/app/components/topics/angular/view-children/view-children.component.ts";
  private highlighted: Boolean = false;

  @ViewChildren(ViewChildrenChildComponent)
  children: QueryList<ViewChildrenChildComponent>;

  @ViewChildren(ViewChildrenChildComponent, {read: ElementRef})
  childrenElementRef: QueryList<ElementRef>;

  objectList: string[] = ['id1', 'id2'];

  objectListToAddNew: string[] = ['id3', 'id4'];

  childList: any;

  firstChild: any;

  changes: any;

  viewChildrenCode: string = `
  @ViewChildren(ViewChildrenChildComponent)
  children: QueryList<ViewChildrenChildComponent>;`;

  getFirstChildCode: string = `
  this.children.first`

  subscribeToChangesCode: string = `
  this.children.changes.subscribe(
    child => {
      this.changes = child.toArray();
    }
  )`;

  viewChildrenAsElementRefCode: string = `
  @ViewChildren(ViewChildrenChildComponent, {read: ElementRef})
  childrenElementRef: QueryList<ElementRef>;`;

  constructor(private highlightService: HighlightService,
              private ref: ChangeDetectorRef
  ) {
  }

  openGithubLink(): void {
    window.open(this.githubLink);
  }

  ngAfterViewChecked(): void {
    this.ref.detectChanges();

    if (!this.highlighted) {
      this.highlightService.highlightAll();
      this.highlighted = true;
    }

  }

  ngAfterViewInit(): void {
    console.log('ViewChildren as QueryList :');
    console.log(this.children);
    this.childList = _.cloneDeep(this.children);

    console.log('First child of ViewChildren as QueryList:');
    console.log(this.children.first);
    this.firstChild = _.cloneDeep(this.children.first);

    console.log('Subscribe on changes:');
    this.children.changes.subscribe(
      child => {
        this.changes = child.toArray();
      }
    )

    this.highlightService.highlightAll();


    console.log('ViewChildren as ElementRef :');
    console.log(this.childrenElementRef);
  }

  onAddCourseClick() {
    this.objectListToAddNew.push('id_NEW');
  }
}
