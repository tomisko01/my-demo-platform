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
import {EldenItemHttpClientService} from "@angularTopic/signal/signal-crud/service/elden-item-http-client.service";
import {EldenItemObservableService} from "@angularTopic/reactive/service/elden-item-observable.service";
import {ReactiveLoadingService} from "@angularTopic/reactive/service/reactive-loading.service";
import {ReactiveLoadingComponent} from "@angularTopic/reactive/component/reactive-loading/reactive-loading.component";
import {
  ReactiveMessagesComponent
} from "@angularTopic/reactive/component/reactive-messages/reactive-messages.component";
import {ReactiveMessagesService} from "@angularTopic/reactive/service/reactive-messages.service";
import {catchError, throwError} from "rxjs";

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
    ReactiveFormsModule,
    ReactiveLoadingComponent,
    ReactiveMessagesComponent
  ],
  providers: [
    ReactiveMessagesService
  ],
  templateUrl: './item-edit-dialog.component.html',
  styleUrl: './item-edit-dialog.component.css'
})
export class ItemEditDialogComponent {

  fb = inject(FormBuilder)
  dialogRef = inject(MatDialogRef<ItemEditDialogComponent>)
  reactiveLoadingService = inject(ReactiveLoadingService)
  reactiveMessagesService = inject(ReactiveMessagesService)

  data: EditItemDialogData = inject(MAT_DIALOG_DATA)

  form = this.fb.group({
    name: [''],
    description: [''],
    type: ['']
  })

  eldenItemObservableService = inject(EldenItemObservableService)

  constructor() {
    this.form.patchValue({
      name: this.data?.item?.name,
      description: this.data?.item?.description,
      type: this.data?.item?.type ?? 'Reusable',
    })
  }

  save() {
    const changes = this.form.value as Partial<elden.Item>
    const saveChanges$ = this.eldenItemObservableService.saveItem(this.data?.item!.id, changes)
      .pipe(
        catchError(err => {
          const message = `Could not save item`
          console.error(err)
          this.reactiveMessagesService.showErrors(message)
          return throwError(err)
        })
      )

    this.reactiveLoadingService.showLoaderUntilCompleted(saveChanges$)
      .subscribe(res => {
        this.dialogRef.close(res);
      })
  }

  close() {
    this.dialogRef.close()
  }
}
