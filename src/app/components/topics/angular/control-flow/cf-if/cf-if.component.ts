import {AfterViewChecked, Component} from '@angular/core';
import {HighlightService} from "@service/common/highlight.service";

@Component({
  selector: 'app-cf-if',
  templateUrl: './cf-if.component.html',
  styleUrl: './cf-if.component.css'
})
export class CfIfComponent implements AfterViewChecked {
  highlighted: boolean = false

  nullObjectToCheck: any = null;

  objectToCheck: any = {
    id: "id01"
  };

  ifCode: string = `@if(objectToCheck){
    <p>{{objectToCheck.id}}
}`;

  elseCode: string = `@if(nullObjectToCheck){
    <p>{{nullObjectToCheck.id}}
}
@else{
    <p>Object not found
}`;

  elseIfCode: string = `@if(nullObjectToCheck){
    <p>{{nullObjectToCheck.id}}
}
@else if(objectToCheck){
    <p>Object found with id: {{objectToCheck.id}}
}
@else{
    <p>Object not found
}`;

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
