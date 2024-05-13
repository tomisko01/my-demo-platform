import {AfterViewChecked, Component} from '@angular/core';
import {HighlightService} from "@service/HighlightService";

@Component({
  selector: 'app-highlighted-usage',
  templateUrl: './highlighted-directive-usage.component.html',
  styleUrl: './highlighted-directive-usage.component.css'
})
export class HighlightedDirectiveUsageComponent implements AfterViewChecked {

  githubLink: string = "https://github.com/tomisko01/my-demo-platform/blob/main/src/app/components/topics/angular/content-projection/content-projection.component.ts";
  private highlighted: Boolean = false;

  directiveCreationCode: string = `ng g directive components/topics/angular/directive/highlighted`;
  directiveUsageCode: string = `
  //DIRECTIVE
  @Directive({
    selector: '[appHighlighted]',
  })

  //HTML
  <div appHighlighted></div>`;

  directiveClassNameCode: string = `
  //DIRECTIVE
  @HostBinding('className')
  get cssClasses(){
    return "dir-highlighted";
  }`;

  directiveClassEnableCode: string = `
  //DIRECTIVE
  @HostBinding('class.dir-highlighted')
  get cssClasses() {
    return true;
  }`;

  directiveStyleCode: string = `
  //DIRECTIVE
  @HostBinding('style.border')
  get borderStyle() {
    return "1px solid red";
  }`;

  directiveAttributeCode: string = `
  //DIRECTIVE
  @HostBinding('attr.disabled')
  get disabled() {
    return true;
  }`;

  directiveListenerCode: string = `
  //DIRECTIVE
  @HostListener('mouseover', ['$event'])
  mouseOver($event: any) {
    console.log($event);
    this.isHighlighted = true;
  }

  @HostListener('mouseleave')
  mouseLeave() {
    this.isHighlighted = false;
  }`;

  constructor(private highlightService: HighlightService
  ) {
  }

  openGithubLink(): void {
    window.open(this.githubLink);
  }

  ngAfterViewChecked(): void {
    if (!this.highlighted) {
      this.highlightService.highlightAll();
      this.highlighted = true;
    }
  }
}
