import { FormGroup, ValidatorFn, Validator, ValidationErrors, AbstractControl } from "@angular/forms";

export function AgeValidator(): ValidatorFn | null {
    return (control: AbstractControl): ValidationErrors | null => {
      const birthDateValue = control.get('birthDate')?.value;
      
  
      if (birthDateValue) {
        let birthDate = new Date(birthDateValue);
        let currentDate = new Date();
  
        const isValid = currentDate.getFullYear() - birthDate.getFullYear() >= 16
        return isValid ? null : { age: true };
      }
  
      return null;
    };
  }