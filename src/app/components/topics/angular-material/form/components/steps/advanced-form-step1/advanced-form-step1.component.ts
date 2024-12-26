import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatError, MatFormField, MatHint, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {itemNameValidator} from "../../../../components/item-name-validator/item-name.validator";
import {AsyncPipe, JsonPipe, NgForOf, NgIf} from "@angular/common";
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";
import {MatCheckbox} from "@angular/material/checkbox";
import {elden} from "../../../../../../../typings";
import {filter, map, Observable} from "rxjs";
import {EldenItemObservableService} from "@angularTopic/reactive/service/elden-item-observable.service";
import {MatOption, MatSelect} from "@angular/material/select";
import * as _ from "lodash";
import {AddressFormComponent} from "../../../../components/address-form/address-form.component";

@Component({
  selector: 'app-advanced-form-step1',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatHint,
    MatError,
    NgIf,
    MatDatepickerToggle,
    MatDatepicker,
    MatDatepickerInput,
    MatCheckbox,
    MatLabel,
    MatSuffix,
    MatSelect,
    NgForOf,
    AsyncPipe,
    MatOption,
    AddressFormComponent,
    JsonPipe
  ],
  templateUrl: './advanced-form-step1.component.html',
  styleUrl: './advanced-form-step1.component.css'
})
export class AdvancedFormStep1Component {

  fb = inject(FormBuilder)
  eldenService = inject(EldenItemObservableService)

  form = this.fb.group({
    title: ['', {
      validators: [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(60)],
      asyncValidators: [itemNameValidator()],
      updateOn: 'blur'
    }],
    someDate: [new Date(), Validators.required],
    someFlag: [false, Validators.requiredTrue],
    description: ['', [Validators.required]],
    type: ['MISC', Validators.required],
    address: [null, Validators.required]
  })

  itemTypes$: Observable<elden.ItemType[]>

  static readonly STORAGE: string = "ADV_FORM_STEP_1"

  constructor() {
    this.itemTypes$ = this.eldenService.loadAllItems().pipe(
      map((items: elden.Item[]) =>
        _.uniqBy(items.map(item => ({id: item.type.toUpperCase(), name: item.type})), 'id')
      ))

    const draft = localStorage.getItem(AdvancedFormStep1Component.STORAGE)

    if(draft){
      this.form.setValue(JSON.parse(draft))
    }

    this.form.valueChanges.pipe(
      filter(() => this.form.valid)
    ).subscribe(
      val => localStorage.setItem(AdvancedFormStep1Component.STORAGE, JSON.stringify(val))
    )
  }

  get itemName() {
    return this.form.controls['title']
  }


}
