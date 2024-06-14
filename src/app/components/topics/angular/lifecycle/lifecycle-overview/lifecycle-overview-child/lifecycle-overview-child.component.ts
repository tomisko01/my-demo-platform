import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked, AfterViewInit,
  Component,
  DoCheck, EventEmitter, Input,
  OnChanges,
  OnDestroy,
  OnInit, Output, SimpleChanges
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
    console.log('Child - constructor')
    this.logComponentData()
  }

  ngAfterContentChecked(): void {
    console.log('Child - ngAfterContentChecked')
    this.logComponentData()
  }

  ngAfterContentInit(): void {
    console.log('Child - ngAfterContentInit')
    this.logComponentData()
  }

  ngAfterViewChecked(): void {
    console.log('Child - ngAfterViewChecked')
    this.logComponentData()
  }

  ngAfterViewInit(): void {
    console.log('Child - ngAfterViewInit')
    this.logComponentData()
  }

  ngDoCheck(): void {
    console.log('Child - ngDoCheck')
    this.logComponentData()
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Child - ngOnChanges', changes)
    this.logComponentData()
  }

  ngOnDestroy(): void {
    console.log('Child - ngOnDestroy')
    this.logComponentData()
  }

  ngOnInit(): void {
    console.log('Child - ngOnInit')
    this.logComponentData()
  }

  handleClick(): void {
    console.log('Child - handleClick')
    this.logComponentData()
    this.triggerEvent.emit()
  }

  logComponentData(){
    console.log('Child - LogComponentData')
    console.log('Child - simpleString ', this.simpleString)
    console.log('Child - simpleObject', this.simpleObject)
  }

}
