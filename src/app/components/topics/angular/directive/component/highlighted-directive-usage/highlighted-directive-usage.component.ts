import {AfterViewChecked, AfterViewInit, Component, ViewChild} from '@angular/core';
import {HighlightService} from "@service/common/highlight.service";
import {HighlightedDirective} from "@angularTopic/directive/highlighted.directive";
import {
  HighlightedDirectiveChildComponent
} from "@angularTopic/directive/component/highlighted-directive-child/highlighted-directive-child.component";

@Component({
  selector: 'app-highlighted-usage',
  templateUrl: './highlighted-directive-usage.component.html',
  styleUrl: './highlighted-directive-usage.component.css'
})
export class HighlightedDirectiveUsageComponent implements AfterViewChecked, AfterViewInit {

  private highlighted: Boolean = false;

  @ViewChild(HighlightedDirective)
  highlightedDir: HighlightedDirective;

  @ViewChild(HighlightedDirectiveChildComponent, {read: HighlightedDirective})
  highlightedChildComponent: HighlightedDirective;

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

  directiveSendEventCode: string = `
  //DIRECTIVE
  @Output()
  toggleHighlight: EventEmitter<boolean> = new EventEmitter();
  ...
  this.toggleHighlight.emit(this.isHighlighted);

  //HTML
  <div appHighlighted
     (toggleHighlight)="onToggle($event)">`;

  directiveApiCode: string = `
  //DIRECTIVE
  @Directive({
    selector: '[appHighlighted]',
    exportAs: 'hl'
  })
  ...
  toggle(){
    this.isHighlighted = !this.isHighlighted;
    this.toggleHighlight.emit(this.isHighlighted);
  }

  //HTML
  <div appHighlighted #highlighter="hl"
     (toggleHighlight)="onToggle($event)">
    ...
    <div (dblclick)="highlighter.toggle()">
        <b> Double click me! </b>
    </div>
  </div>`;

  directiveInstanceCode: string = `
  @ViewChild(HighlightedDirective)
  highlightedDir: HighlightedDirective;`;


  directiveInstanceChildCode: string = `
  //HTML
  <app-highlighted-directive-child appHighlighted>
  </app-highlighted-directive-child>

  //COMPONENT
  @ViewChild(HighlightedDirectiveChildComponent, {read: HighlightedDirective})
  highlightedChildComponent: HighlightedDirective;`;

  constructor(private highlightService: HighlightService
  ) {
  }

  ngAfterViewChecked(): void {
    if (!this.highlighted) {
      this.highlightService.highlightAll();
      this.highlighted = true;
    }
  }

  onToggle(isHighlighted: boolean): void {
    console.log('react on event from directive:')
    console.log(isHighlighted);
  }

  ngAfterViewInit(): void {
    console.log('instances of directives gathered by @ViewChild');
    console.log(this.highlightedDir);
    console.log(this.highlightedChildComponent);
  }
}
