import {Directive} from "@angular/core";
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";
import {createPasswordStrengthValidator} from "./password-strength.validator";

@Directive({
  standalone: true,
  selector: '[passwordStrength]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: PasswordStrengthDirective,
    multi: true
  }]
})
export class PasswordStrengthDirective implements Validator {

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return createPasswordStrengthValidator()(control)
  }

}
