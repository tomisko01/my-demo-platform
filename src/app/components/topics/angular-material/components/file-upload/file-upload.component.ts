import {Component, inject, input, signal} from '@angular/core';
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatIcon} from "@angular/material/icon";
import {MatMiniFabButton} from "@angular/material/button";
import {HttpClient, HttpEventType} from "@angular/common/http";
import {environment} from "../../../../../../environments/environment";
import {catchError, finalize, of} from "rxjs";
import {MatProgressBar} from "@angular/material/progress-bar";
import {NgIf} from "@angular/common";
import {ControlValueAccessor} from "@angular/forms";

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [
    MatFormField,
    MatInput,
    MatIcon,
    MatMiniFabButton,
    MatProgressBar,
    NgIf
  ],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.css'
})
export class FileUploadComponent implements ControlValueAccessor {

  readonly requiredFileType = input.required<string>()

  httpClient = inject(HttpClient)

  fileName = signal<string>('')
  fileUploadError = signal<boolean>(false)
  uploadProgress: number | null = null
  disabled: boolean = false
  onChange = (fileName: string) => {}
  onTouched = () => {}

  writeValue(value: any): void {
    this.fileName.set(value)
  }

  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled
  }

  onFileSelected(event: Event) {
    const target = event.target as HTMLInputElement
    if (target.files) {
      const file: File = target.files[0]
      if (file) {
        this.fileName.set(file.name)
        this.fileUploadError.set(false)
        this.uploadProgress = 0.1
        this.uploadFile(file)
      } else {
        this.fileName.set('')
      }
    }
  }

  private uploadFile(file: File) {
    const formData = new FormData()
    formData.append("thumbnail", file)

    this.httpClient.post(`${environment.apiRoot}/thumbnail-upload`, formData, {
      reportProgress: true,
      observe: 'events'
    }).pipe(
      catchError(err => {
        this.fileUploadError.set(true)
        return of(err)
      }),
      finalize(() => this.uploadProgress = null)
    ).subscribe(event => {
      if (event.type == HttpEventType.UploadProgress) {
        this.uploadProgress = Math.round(100 * (event.loaded / event.total))
      } else if (event.type == HttpEventType.Response) {
        this.onChange(this.fileName())
      }
    })
  }

  onClick(fileUpload: HTMLInputElement) {
    this.onTouched()
    fileUpload.click()
  }
}
