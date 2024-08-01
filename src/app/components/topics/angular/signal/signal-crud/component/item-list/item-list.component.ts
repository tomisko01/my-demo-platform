import {Component, inject, input, output} from '@angular/core';
import {elden} from "../../../../../../../typings";
import {MatButton, MatFabButton, MatIconButton, MatMiniFabButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {openEditItemDialog} from "@angularTopic/signal/signal-crud/component/edit-item/edit-item.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [
    MatButton,
    MatFabButton,
    MatIcon,
    MatIconButton,
    MatMiniFabButton
  ],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css'
})
export class ItemListComponent {

  dialog = inject(MatDialog)

  items = input.required<elden.Item[]>()
  // signal input  with initial value []

  // items = input<elden.Item[]>([])

  itemUpdated = output<elden.Item>()

  itemDeleted = output<string>()

  async onEditItem(item: elden.Item) {
    const updatedItem = await openEditItemDialog(this.dialog, {
      mode: "update",
      title: `Edit Item`,
      item
    })

    console.log(`Item edited: `, updatedItem)

    this.itemUpdated.emit(updatedItem)
  }

  onDeleteItem(item: elden.Item) {
    this.itemDeleted.emit(item.id)
  }
}
