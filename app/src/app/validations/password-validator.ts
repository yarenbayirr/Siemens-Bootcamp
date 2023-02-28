import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function passwordValidator() : ValidatorFn {
    var passwValidatorFunc = (control: AbstractControl) : ValidationErrors | null => {
        const value = control.value;
        if(!value) return null;
        const hasUpperCase = /[A-Z]+/.test(value);
        const hasLowerCase = /[a-z]+/.test(value);
        const hasNumeric = /[0-9]+/.test(value);
        const isLengthValid = value.length > 7;

        const isValid = hasUpperCase && hasLowerCase && hasNumeric && isLengthValid;

        return isValid ? null : {passwordFormat : true}
    }
    return passwValidatorFunc;
}
