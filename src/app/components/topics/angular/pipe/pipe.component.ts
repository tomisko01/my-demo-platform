import {AfterViewChecked, Component} from '@angular/core';
import {HighlightService} from "@service/HighlightService";

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent implements AfterViewChecked {

  githubLink: string = "https://github.com/tomisko01/my-demo-platform/blob/main/src/app/components/topics/angular/pipe/pipe.component.spec.ts";
  private highlighted: Boolean = false;

  startDate: Date = new Date();
  title: string = 'Omenare Imperavi Emulari, Ameno';
  numberValue: number = 9.99;
  numberValueAsString: string = '21.37';

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

  //COMPONENT
  numberValue: number = 9.99;`;

  constructor(private highlightService: HighlightService
  ) {
  }

  ngAfterViewChecked(): void {
    if (!this.highlighted) {
      this.highlightService.highlightAll();
      this.highlighted = true;
    }
  }

  openGithubLink(): void {
    window.open(this.githubLink);
  }

}
