import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-lifecycle-overview',
  templateUrl: './lifecycle-overview.component.html',
  styleUrl: './lifecycle-overview.component.css'
})
export class LifecycleOverviewComponent implements OnInit,
  OnDestroy,
  DoCheck,
  OnChanges,
  AfterContentChecked,
  AfterViewChecked,
  AfterContentInit,
  AfterViewInit {

  simpleText: string = 'Initial Text';
  simpleStringToPass: string = 'Initial text for child';
  simpleObjectToPass: any = {
    id: 'id01',
    title: 'title01',
    ameno: 'dorime',
  };
  propertyOnChildContent: string = 'initial propertyOnChildContent';
  counter: number = 0;
  showChild: boolean = false;

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
    this.logComponentData('ngAfterViewInit')
  }

  ngDoCheck(): void {
    this.logComponentData('ngDoCheck')
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Parent - ngOnChanges', changes)
    this.logComponentData('ngOnChanges')
  }

  ngOnDestroy(): void {
    this.logComponentData('ngOnDestroy')
  }

  ngOnInit(): void {
    this.logComponentData('ngOnInit')
  }

  handleChildEvent() {
    this.logComponentData('handleChildEvent')
  }

  logComponentData(methodName: string) {
    console.log('Parent - ' + methodName,
      {
        'this.simpleText': this.simpleText,
        'this.simpleStringToPass': this.simpleStringToPass,
        'simpleObjectToPass': this.simpleObjectToPass,
        'propertyOnChildContent': this.propertyOnChildContent,
        'counter': this.counter,
        'showChild': this.showChild,
      })
  }

  changeSimpleText() {
    this.simpleText = this.simpleText + '_' + this.counter++
    this.logComponentData('changeSimpleText')
  }

  changeSimpleStringToPass() {
    this.simpleStringToPass = this.simpleStringToPass + '_' + this.counter++
    this.logComponentData('changeSimpleStringToPass')
  }

  changeSimpleObjectToPass() {
    this.simpleObjectToPass.ameno = this.simpleObjectToPass.ameno + '_' + this.counter++
    this.logComponentData('changeSimpleObjectToPass')
  }

  mutateSimpleObjectToPass() {
    this.simpleObjectToPass = {...this.simpleObjectToPass, ameno: 'mutated dorime' + '_' + this.counter++}
    this.logComponentData('mutateSimpleObjectToPass')
  }

  changePropertyOnChildContent() {
    this.propertyOnChildContent = this.propertyOnChildContent + '_' + this.counter++
    this.logComponentData('changePropertyOnChildContent')
  }

  changeChildStatus() {
    this.showChild = !this.showChild
    this.logComponentData('changeChildStatus')
  }
}
