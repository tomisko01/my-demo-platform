import {AbstractControl, AsyncValidatorFn, ValidationErrors} from "@angular/forms";
import {inject} from "@angular/core";
import {EldenItemObservableService} from "@angularTopic/reactive/service/elden-item-observable.service";
import {map, Observable} from "rxjs";

export function itemNameValidator(): AsyncValidatorFn {
  const itemService = inject(EldenItemObservableService)

  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    return itemService.loadAllItems().pipe(
       map(items => {
        const item = items.find(item => item.name.toLowerCase() == control.value.toLowerCase())
        return item ? {titleExists: true} : null
      })
    )
  }
}
