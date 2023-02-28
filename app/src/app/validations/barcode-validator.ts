import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms"; //kullanmak için bunları ekledik

export function barcodeValidator():ValidatorFn {
    var validationFunction = (control: AbstractControl): ValidationErrors | null => {
        const value = control.value;
        if(!value) return null;
        const hasUpperCase = /[A-Z]+/.test(value);
        const hasLowerCase = /[a-z]+/.test(value);
        const hasNumeric = /[0-9]+/.test(value);

        const isValid = hasUpperCase && hasLowerCase && hasNumeric;

        return isValid ? null : {barcodeFormat : true}
       
    }
    return validationFunction;
}
