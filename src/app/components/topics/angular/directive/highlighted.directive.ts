import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlighted]',
})
export class HighlightedDirective {

  isHighlighted = false;

  constructor() {
  }

  /*
    @HostBinding('className')
    get cssClasses(){
      return "dir-highlighted";
    }
    */


  @HostBinding('class.dir-highlighted')
  get isHighlightedClass() {
    return this.isHighlighted;
  }

  /*
    @HostBinding('style.border')
    get borderStyle() {
      return "1px solid red";
    }
    */

  @HostListener('mouseover', ['$event'])
  mouseOver($event: MouseEvent) {
    console.log($event);
    this.isHighlighted = true;
  }

  @HostListener('mouseleave')
  mouseLeave() {
    this.isHighlighted = false;
  }
}
