import {AfterViewChecked, Component} from '@angular/core';
import {HighlightService} from "@service/common/highlight.service";

enum Category {
  BEGINNER = "BEGINNER",
  INTERMEDIATE = "INTERMEDIATE",
  ADVANCED = "ADVANCED",
  OTHER = "OTHER"
}

type objectToShow = { name: string, category: Category };

@Component({
  selector: 'app-cf-switch',
  templateUrl: './cf-switch.component.html',
  styleUrl: './cf-switch.component.css'
})
export class CfSwitchComponent implements AfterViewChecked {

  highlighted: boolean = false;

  object1: objectToShow = {
    name: "name01",
    category: Category.BEGINNER
  };

  listToShow: objectToShow[] = [
    this.object1,
    {
      name: "name02",
      category: Category.ADVANCED
    },
    {
      name: "name03",
      category: Category.OTHER
    }]
  switchCode: string = `
@switch(object1.category){
    @case("BEGINNER"){
      <div>BEGINNER</div>
    }
    @case("INTERMEDIATE"){
      <div>INTERMEDIATE</div>
    }
    @case("ADVANCED") {
      <div>ADVANCED</div>
    }
}`;
  switchListCode: string = `
@for(item of listToShow; track item.name){
  <p> Object name: {{item.name}}
  @switch(item.category){
    @case("BEGINNER"){
    <div>BEGINNER</div>
    }
    @case("INTERMEDIATE"){
    <div>INTERMEDIATE</div>
    }
    @case("ADVANCED") {
    <div>ADVANCED</div>
    }
    @default {
    <div>UNKNOW</div>
    }
  }
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
