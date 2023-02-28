import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function emailValidator() : ValidatorFn {
    var emailValidatorFunc = (control : AbstractControl) : ValidationErrors | null => {
        const value = control.value;
        if(!value) return null;
        const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
        return isValid ? null : {emailFormat : true}
    }
   return emailValidatorFunc;
}
