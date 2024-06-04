import {Component} from '@angular/core';

@Component({
  selector: 'app-input-property-syntax',
  templateUrl: './input-property-syntax.component.html',
  styleUrls: ['./input-property-syntax.component.css']
})
export class InputPropertySyntaxComponent {

  title: string = 'title';
  titleExample: string = "title example";

  reloadTitle(value: string) {
    this.title = value;
  }
}
