import {Component, inject} from '@angular/core';
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material/dialog";
import {EditItemDialogData} from "@angularTopic/signal/signal-crud/component/edit-item/edit-item-dialog.data.model";
import {firstValueFrom} from "rxjs";
import {elden} from "../../../../../../../typings";
import {EldenItemHttpClientService} from "@angularTopic/signal/signal-crud/service/elden-item-http-client.service";
import {update} from "lodash-es";

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

  dialogRef = inject(MatDialogRef)

  eldenItemService = inject(EldenItemHttpClientService)

  data: EditItemDialogData = inject(MAT_DIALOG_DATA)

  fb = inject(FormBuilder)

  form = this.fb.group({
    name: [''],
    description: [''],
    type: ['']
  })


  onClose() {
    this.dialogRef.close()
  }

  constructor() {
    this.form.patchValue({
      name: this.data?.item?.name,
      description: this.data?.item?.description,
      type: this.data?.item?.type,
    })
  }

  async onSave() {
    const itemProps = this.form.value as Partial<elden.Item>

    if (this.data?.mode === 'update') {
      await this.saveItem(this.data?.item!.id, itemProps)
    } else if (this.data?.mode === 'create') {
      await this.createItem(itemProps)
    }
  }

  async createItem(itemToSave: Partial<elden.Item>) {
    try {
      const newItem = await this.eldenItemService.createItem(itemToSave)
      this.dialogRef.close(newItem)
    } catch (err) {
      console.error(err)
      alert(`Failed to create the item.`)
    }
  }

  async saveItem(itemId: string, changes: Partial<elden.Item>) {
    try {
      const updatedItem = await this.eldenItemService.saveItem(itemId, changes)
      this.dialogRef.close(updatedItem)
    } catch (err) {
      console.error(err)
      alert(`Failed to save the item.`)
    }
  }
}

export async function openEditItemDialog(dialog: MatDialog, data: EditItemDialogData) {
  const config = new MatDialogConfig()
  config.disableClose = false
  config.autoFocus = true
  config.width = '400px'
  config.data = data

  const close$ = dialog.open(EditItemComponent, config).afterClosed()

  return firstValueFrom(close$)
}
