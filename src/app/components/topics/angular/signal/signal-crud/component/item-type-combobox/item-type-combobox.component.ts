import {Component, contentChild, effect, ElementRef, input, model} from '@angular/core';

@Component({
  selector: 'app-item-type-combobox',
  standalone: true,
  imports: [],
  templateUrl: './item-type-combobox.component.html',
  styleUrl: './item-type-combobox.component.css'
})
export class ItemTypeComboboxComponent {

  label = input.required<string>()

  typeValue = model.required<string>()

  title = contentChild<ElementRef>('itemTitle')
  // contentChildren for list of elements

  constructor() {
    effect(() => {
      console.log(`title as contentChild: `, this.title())
    });
  }

  onTypeChange(value: string) {
    this.typeValue.set(value)
  }
}
