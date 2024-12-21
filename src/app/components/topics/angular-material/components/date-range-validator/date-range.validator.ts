import {AbstractControl, FormGroup, ValidatorFn, Validators} from "@angular/forms";

export function eventDateRangeValidator(): ValidatorFn {
  return (form: AbstractControl): Validators | null => {
    const startDate: Date = form.get('eventStart')?.value
    const endDate: Date = form.get('eventEnd')?.value
    if (endDate && startDate) {
      const isRangeValid = (endDate.getTime() - startDate.getTime() > 0)

      return isRangeValid ? null : {eventPeriod: true}

    }

    return null;
  }
}
