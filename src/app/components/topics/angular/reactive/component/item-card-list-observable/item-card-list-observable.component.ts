import {ChangeDetectionStrategy, Component, EventEmitter, inject, Input, Output, output} from '@angular/core';
import {elden} from "../../../../../../typings";
import {
  MatCard, MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardLgImage,
  MatCardTitle
} from "@angular/material/card";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {ItemEditDialogComponent} from "@angularTopic/reactive/component/item-edit-dialog/item-edit-dialog.component";
import {MatButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {filter, tap} from "rxjs";

@Component({
  selector: 'app-item-card-list-observable',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardImage,
    MatCardLgImage,
    MatCardContent,
    MatCardTitle,
    MatCardActions,
    MatButton,
    RouterLink
  ],
  templateUrl: './item-card-list-observable.component.html',
  styleUrl: './item-card-list-observable.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemCardListObservableComponent {

  @Input()
  items: elden.Item[] = []

  @Output()
  private itemChanged = new EventEmitter<elden.Item>()

  dialog = inject(MatDialog)

  editItem(item: elden.Item) {

    const dialogConfig = new MatDialogConfig()

    dialogConfig.disableClose = true
    dialogConfig.autoFocus = true
    dialogConfig.width = "400px"

    dialogConfig.data = {mode: 'update',item: item, title: `Edit Item`}

    const dialogRef = this.dialog.open(ItemEditDialogComponent, dialogConfig)

    dialogRef.afterClosed()
      .pipe(
        filter(val=> !!val),
        tap(res => this.itemChanged.emit(res))
      )
      .subscribe()
  }

}
