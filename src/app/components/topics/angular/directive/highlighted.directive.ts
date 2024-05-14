import {Directive, EventEmitter, HostBinding, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[appHighlighted]',
  exportAs: 'hl'
})
export class HighlightedDirective {

  isHighlighted = false;


  @Output()
  toggleHighlight: EventEmitter<boolean> = new EventEmitter();

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
    console.log('mouseover event triggered:');
    console.log($event);
    this.isHighlighted = true;
    this.toggleHighlight.emit(this.isHighlighted);
  }

  @HostListener('mouseleave')
  mouseLeave() {
    this.isHighlighted = false;
    this.toggleHighlight.emit(this.isHighlighted);
  }

  toggle() {
    this.isHighlighted = !this.isHighlighted;
    this.toggleHighlight.emit(this.isHighlighted);
  }
}
