import {AfterViewChecked, Component} from '@angular/core';
import {HighlightService} from "@service/common/highlight.service";

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent implements AfterViewChecked {

  private highlighted: Boolean = false;

  startDate: Date = new Date();
  title: string = 'Omenare Imperavi Emulari, Ameno';
  numberValue: number = 9.99;
  rateValue: number = 0.67;
  jsonValue: any = {
    id: 'id01',
    name: 'name01',
    child: {
      id: 'chId01',
      name: 'childName01'
    }
  };

  listValue: { id: string, name: string, ameno: string }[] = [{
    id: 'id-1',
    name: 'name-1',
    ameno: 'dorime'
  }, {
    id: 'id-2',
    name: 'name-2',
    ameno: 'lancire'
  }, {
    id: 'id-3',
    name: 'name-3',
    ameno: 'doge'
  }];

  iteratorList = this.listValue[Symbol.iterator]();
  datePipeCode: string = `
  //HTML
  startDate value = {{ startDate }}
  startDate value with date pipe = {{ startDate | date }}
  startDate value with date pipe formatted dd/MM/yy = {{ startDate | date: 'dd/MM/yy'  }}

  //COMPONENT
  startDate: Date = new Date();`;

  stringPipeCode: string = `
  //HTML
  title value = {{ title }}
  title value with lowercase = {{ title| lowercase }}
  title value with uppercase = {{ title| uppercase }}

  //COMPONENT
  title: String = 'Omenare Imperavi Emulari, Ameno';`;

  numberPipeCode: string = `
  //HTML
  number value = {{ numberValue }}
  number value with digits info pipe = {{ numberValue | number: '3.3-5' }}
  number value as currency = {{numberValue | currency}}
  number value as currency in EURO = {{numberValue | currency: 'EUR'}}

  //COMPONENT
  numberValue: number = 9.99;`;
  percentPipeCode: string = `
  //HTML
  <div>rateValue =  {{ rateValue }}</div>
  <div>rateValue as percent {{ rateValue | percent }}</div>

  //COMPONENT
  number = 0.67;`;

  jsonPipeCode: string = `
  //HTML
  jsonValue =  {{ jsonValue }}
  jsonValue as json {{ jsonValue | json }}

  //COMPONENT
  jsonValue: any = {
    id: 'id01',
    name: 'name01',
    child: {
      id: 'chId01',
      name: 'childName01'
    }
  };`;
  listPipeCode: string = `
  //HTML
  <div>listValue =  {{ listValue | json }}</div>
  <div>listValue with slice {{ jsonValue | slice:0:2 | json }}</div>

  //COMPONENT
  any[] = [{
    id: 'id-1',
    name: 'name-1',
    ameno: 'dorime'
  }, {
    id: 'id-2',
    name: 'name-2',
    ameno: 'lancire'
  }, {
    id: 'id-3',
    name: 'name-3',
    ameno: 'doge'
  }];`;
  keyValuePipeCode: string = `
  @for (item of listValue[0] | keyvalue; track $index){
    <p>key: {{item.key}}, value: {{item.value}}</p>
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
