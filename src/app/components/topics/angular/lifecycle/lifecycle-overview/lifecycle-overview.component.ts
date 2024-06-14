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

  constructor() {
    console.log('Parent - constructor');
    this.logComponentData()
  }

  ngAfterContentChecked(): void {
    console.log('Parent - ngAfterContentChecked')
    this.logComponentData()
  }

  ngAfterContentInit(): void {
    console.log('Parent - ngAfterContentInit')
    this.logComponentData()
  }

  ngAfterViewChecked(): void {
    console.log('Parent - ngAfterViewChecked')
    this.logComponentData()
  }

  ngAfterViewInit(): void {
    console.log('Parent - ngAfterViewInit')
    this.logComponentData()
  }

  ngDoCheck(): void {
    console.log('Parent - ngDoCheck')
    this.logComponentData()
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Parent - ngOnChanges', changes)
    this.logComponentData()
  }

  ngOnDestroy(): void {
    console.log('Parent - ngOnDestroy')
    this.logComponentData()
  }

  ngOnInit(): void {
    console.log('Parent - ngOnInit')
    this.logComponentData()
  }

  handleChildEvent() {
    console.log('Parent - handleChildEvent');
    this.logComponentData()
  }

  logComponentData() {
    console.log('%cParent - LogComponentData start', 'background: gray')
    console.log('Parent - simpleText', this.simpleText,)
    console.log('Parent - simpleStringToPass', this.simpleStringToPass)
    console.log('Parent - simpleObjectToPass', this.simpleObjectToPass)
    console.log('Parent - propertyOnChildContent', this.propertyOnChildContent)
    console.log('Parent - counter', this.counter)
    console.log('%cParent - LogComponentData end', 'background: gray')
    console.log({'this.simpleText': this.simpleText, 'this.simpleStringToPass': this.simpleStringToPass})

  }

  changeSimpleText() {
    this.simpleText = this.simpleText + '_' + this.counter++
    this.logComponentData()
  }

  changeSimpleStringToPass() {
    this.simpleStringToPass = this.simpleStringToPass + '_' + this.counter++
    this.logComponentData()
  }

  changeSimpleObjectToPass() {
    this.simpleObjectToPass.ameno = this.simpleObjectToPass.ameno + '_' + this.counter++
    this.logComponentData()
  }

  mutateSimpleObjectToPass() {
    this.simpleObjectToPass = {...this.simpleObjectToPass, ameno: 'mutated dorime' + '_' + this.counter++}
    this.logComponentData()
  }

  changePropertyOnChildContent() {
    this.propertyOnChildContent = this.propertyOnChildContent + '_' + this.counter++
    this.logComponentData()
  }
}
