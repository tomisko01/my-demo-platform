import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {elden} from "../../../../../../../../typings";

@Component({
  selector: 'app-observable-on-push-child',
  templateUrl: './observable-on-push-child.component.html',
  styleUrl: './observable-on-push-child.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ObservableOnPushChildComponent {

  @Input()
  childItem!: elden.Item;

}
