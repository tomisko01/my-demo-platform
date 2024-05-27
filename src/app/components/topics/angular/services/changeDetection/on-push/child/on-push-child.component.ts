import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-on-push-child',
  templateUrl: './on-push-child.component.html',
  styleUrl: './on-push-child.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushChildComponent {

  @Input()
  inputObject: { name: string, id: string, description: string };

}
