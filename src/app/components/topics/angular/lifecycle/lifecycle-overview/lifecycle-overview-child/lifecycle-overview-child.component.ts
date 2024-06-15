import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-lifecycle-overview-child',
  templateUrl: './lifecycle-overview-child.component.html',
  styleUrl: './lifecycle-overview-child.component.css'
})
export class LifecycleOverviewChildComponent implements OnInit,
  OnDestroy,
  DoCheck,
  OnChanges,
  AfterContentChecked,
  AfterViewChecked,
  AfterContentInit,
  AfterViewInit {

  @Input() simpleString!: any;
  @Input() simpleObject!: any;
  @Output() triggerEvent = new EventEmitter<void>();

  constructor() {
    this.logComponentData('constructor')
  }

  ngAfterContentChecked(): void {
    this.logComponentData('ngAfterContentChecked')
  }

  ngAfterContentInit(): void {
    this.logComponentData('ngAfterContentInit')
  }

  ngAfterViewChecked(): void {
    this.logComponentData('ngAfterViewChecked')
  }

  ngAfterViewInit(): void {
    console.log('Child - ')
    this.logComponentData('ngAfterViewInit')
  }

  ngDoCheck(): void {
    this.logComponentData('ngDoCheck')
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Child - ngOnChanges', changes)
    this.logComponentData('ngOnChanges')
  }

  ngOnDestroy(): void {
    this.logComponentData('ngOnDestroy')
  }

  ngOnInit(): void {
    this.logComponentData('ngOnInit')
  }

  handleClick(): void {
    this.logComponentData('handleClick')
    this.triggerEvent.emit()
  }

  logComponentData(methodName: string) {
    console.log('Child - ' + methodName, {
        'this.simpleString': this.simpleString,
        'this.simpleObject': this.simpleObject,
      })
  }
}
