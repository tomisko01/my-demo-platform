import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {elden} from "../../../../../../typings";
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {EditItemDialogData} from "@angularTopic/signal/signal-crud/component/edit-item/edit-item-dialog.data.model";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-item-edit-dialog',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatFormField,
    MatInput,
    MatSelect,
    MatOption,
    MatDialogActions,
    MatButton,
    ReactiveFormsModule
  ],
  templateUrl: './item-edit-dialog.component.html',
  styleUrl: './item-edit-dialog.component.css'
})
export class ItemEditDialogComponent {

  fb = inject(FormBuilder)
  dialogRef = inject(MatDialogRef<ItemEditDialogComponent>)
  data: EditItemDialogData = inject(MAT_DIALOG_DATA)

  form = this.fb.group({
    name: [''],
    description: [''],
    type: ['']
  })

  constructor() {
    this.form.patchValue({
      name: this.data?.item?.name,
      description: this.data?.item?.description,
      type: this.data?.item?.type ?? 'Reusable',
    })
  }

  save() {
    const changes = this.form.value;
  }

  close() {
    this.dialogRef.close();
  }
}
