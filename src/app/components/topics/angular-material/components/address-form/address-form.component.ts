import {Component, inject, Input, OnDestroy} from '@angular/core';
import {ControlValueAccessor, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {Subscription} from "rxjs";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-address-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    JsonPipe
  ],
  templateUrl: './address-form.component.html',
  styleUrl: './address-form.component.css'
})
export class AddressFormComponent implements ControlValueAccessor, OnDestroy {

  @Input()
  legend: string;

  onTouched = () => {};
  fb = inject(FormBuilder)
  onChangeSub: Subscription;

  form: FormGroup = this.fb.group({
    addressLine1: [null, [Validators.required]],
    addressLine2: [null, [Validators.required]],
    zipCode: [null, [Validators.required]],
    city: [null, [Validators.required]]
  });

  ngOnDestroy(): void {
    this.onChangeSub.unsubscribe();
  }

  writeValue(value: any): void {
    if (value) {
      this.form.setValue(value);
    }  }

  registerOnChange(onChange: any): void {
    this.onChangeSub = this.form.valueChanges.subscribe(onChange);
  }

  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }

  setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.form.disable();
    }
    else {
      this.form.enable();
    }
  }

}
