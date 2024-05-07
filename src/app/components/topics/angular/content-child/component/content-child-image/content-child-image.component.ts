import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-content-child-image',
  templateUrl: './content-child-image.component.html',
  styleUrl: './content-child-image.component.css'
})
export class ContentChildImageComponent {

  @Input('imageSrc')
  imageUrl: string;
}
