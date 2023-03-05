import { FormGroup, ValidatorFn, Validator, ValidationErrors, AbstractControl } from "@angular/forms";

export function ContentValidator(): ValidatorFn | null {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if(!value) return null;
      const isLengthValid = value.length >= 50;
      const isValid  =  isLengthValid;
      return isValid ? null : {contentFormat : true}
      
      
    };
  }