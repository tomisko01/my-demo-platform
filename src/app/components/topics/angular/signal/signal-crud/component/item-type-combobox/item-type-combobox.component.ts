import {Component, input, model} from '@angular/core';

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

  constructor() {

  }

  onTypeChange(value: string) {
    this.typeValue.set(value)
  }
}
