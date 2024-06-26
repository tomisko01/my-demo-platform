import {AfterViewChecked, Component} from '@angular/core';
import {HighlightService} from "@service/common/highlight.service";

@Component({
  selector: 'app-cf-for',
  templateUrl: './cf-for.component.html',
  styleUrl: './cf-for.component.css'
})
export class CfForComponent implements AfterViewChecked {

  objectList: { id: string, name: string }[] = [{
    id: '0001',
    name: 'Object 1 name',
  },
    {
      id: '0002',
      name: 'Object 2 name'
    }];

  emptyList: any[];

  forCode: string = `
  @for(item of objectList; track item.id){
  <app-cf-for-child
    [id]="item.id"
    [name]="item.name">
  </app-cf-for-child>
  }`;

  emptyCode: string = `
@empty{
<p>No elements found</p>
}`;

  indexCode: string = `@for(item of objectList; track item.id; let index = $index)`;
  countCode: string = `@for(item of objectList; track item.id; let count = $count)`;
  firstCode: string = `@for(item of objectList; track item.id; let first = $first; let last = $last;let even = $even;let odd = $odd)`;
  upgradeCode: string = `ng generate @angular/core:control-flow`;

  highlighted: boolean = false;

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
