import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function emailValidator() : ValidatorFn {
    var emailValidatorFunc = (control : AbstractControl) : ValidationErrors | null => {
        const value = control.value;
        if(!value) return null;
        const includesDot = value.includes('.');
        const includesChar = value.includes('@');
        const isValid = includesDot && includesChar;
        return isValid ? null : {emailFormat : true}
    }
   return emailValidatorFunc;
}
