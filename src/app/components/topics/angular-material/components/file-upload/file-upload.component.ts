import {Component, inject, input, model, signal} from '@angular/core';
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatIcon} from "@angular/material/icon";
import {MatMiniFabButton} from "@angular/material/button";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../../environments/environment";
import {catchError, of} from "rxjs";

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [
    MatFormField,
    MatInput,
    MatIcon,
    MatMiniFabButton
  ],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.css'
})
export class FileUploadComponent {

  readonly requiredFileType = input.required<string>()

  httpClient = inject(HttpClient)

  fileName = signal<string>('')
  fileUploadError = signal<boolean>(false)


  onFileSelected(event: Event) {
    const target = event.target as HTMLInputElement
    if (target.files) {
      const file: File = target.files[0]
      if (file) {
        this.fileName.set(file.name)
        this.fileUploadError.set(false)
        const formData = new FormData()
        formData.append("thumbnail", file)

        this.httpClient.post(`${environment.apiRoot}/thumbnail-upload`, formData).pipe(
          catchError(err => {
            this.fileUploadError.set(true)
            return of(err)
          })
        ).subscribe()

      } else {
        this.fileName.set('')
      }


    }
  }
}
