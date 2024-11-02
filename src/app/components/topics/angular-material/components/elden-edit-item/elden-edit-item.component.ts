import {Component, Inject, inject} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogConfig,
  MatDialogContent, MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {elden} from "../../../../../typings";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-elden-edit-item',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatFormField,
    MatInput,
    ReactiveFormsModule,
    MatRadioButton,
    MatRadioGroup,
    MatButton
  ],
  templateUrl: './elden-edit-item.component.html',
  styleUrl: './elden-edit-item.component.css'
})
export class EldenEditItemComponent {


  fb = inject(FormBuilder)
  dialogRef = inject(MatDialogRef<EldenEditItemComponent>)
  item = inject(MAT_DIALOG_DATA)
  title = this.item.name


  form: FormGroup = this.fb.group({
    name: [this.item.name, Validators.required],
    type: [this.item.type, Validators.required],
    description: [this.item.description, Validators.required]
  })

  close() {
    this.dialogRef.close()
  }

  save() {
    this.dialogRef.close(this.form.value)
  }
}


export function openEditItemDialog(dialog: MatDialog, item: elden.Item) {
  const config = new MatDialogConfig()

  config.autoFocus = true
  config.data = {...item}

  const dialogRef = dialog.open(EldenEditItemComponent, config)

  return dialogRef.afterClosed()
}
