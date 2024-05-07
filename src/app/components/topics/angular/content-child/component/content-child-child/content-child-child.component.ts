import {AfterViewInit, Component, ContentChild, ElementRef} from '@angular/core';
import {
  ContentChildImageComponent
} from "@angularTopic/content-child/component/content-child-image/content-child-image.component";

@Component({
  selector: 'app-content-child-child',
  templateUrl: './content-child-child.component.html',
  styleUrl: './content-child-child.component.css'
})
export class ContentChildChildComponent implements AfterViewInit {

  @ContentChild('divElement')
  divElement: ElementRef;

  @ContentChild(ContentChildImageComponent)
  content: ContentChildImageComponent;

  ngAfterViewInit(): void {
    console.log('divElement:');
    console.log(this.divElement);
    console.log('component get by contentChild:');
    console.log(this.content);
  }

}
