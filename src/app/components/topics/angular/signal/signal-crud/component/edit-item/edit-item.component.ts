import {Component, inject} from '@angular/core';
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material/dialog";
import {EditItemDialogData} from "@angularTopic/signal/signal-crud/component/edit-item/edit-item-dialog.data.model";
import {firstValueFrom} from "rxjs";

@Component({
  selector: 'app-edit-item',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './edit-item.component.html',
  styleUrl: './edit-item.component.css'
})
export class EditItemComponent {

  // dialogRef = inject(MatDialogRef);
  //
  // data: EditItemDialogData = inject(MAT_DIALOG_DATA);
  //
  // fb = inject(FormBuilder);
  //
  // form = this.fb.group({
  //   name: [''],
  //   description: [''],
  //   image: ['']
  // });


}

export async function openEditItemDialog(dialog: MatDialog, data: EditItemDialogData) {
  const config = new MatDialogConfig()
  config.disableClose = true
  config.autoFocus = true
  config.width = '400px'
  config.data = data

  const close$ = dialog.open(EditItemComponent, config).afterClosed()

  return firstValueFrom(close$)
}
