import {Component} from '@angular/core';

@Component({
  selector: 'app-cf-for',
  templateUrl: './cf-for.component.html',
  styleUrl: './cf-for.component.css'
})
export class CfForComponent {
  githubLink: string = "https://github.com/tomisko01/my-demo-platform/blob/main/src/app/components/topics/angular/control-flow/cf-for.component.ts";

  objectList: { id: string, name: string }[] = [{
    id: '0001',
    name: 'Object 1 name',
  },
    {
      id: '0002',
      name: 'Object 2 name'
    }];

  emptyList: any[];

  forCode:string = `
  @for(item of objectList; track item.id){
  <app-cf-for-child
    [id]="item.id"
    [name]="item.name">
  </app-cf-for-child>
  }`;

  emptyCode: string =`
@empty{
<p>No elements found</p>
}`

  openGithubLink(): void {
    window.open(this.githubLink);
  }

}
