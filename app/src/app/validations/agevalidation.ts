import { FormGroup, ValidatorFn, Validator, ValidationErrors, AbstractControl } from "@angular/forms";
import * as moment from "moment";


export function AgeValidator(): ValidatorFn | null {
    return (control: AbstractControl): ValidationErrors | null => {
      let birthdateYear = new Date(control.value).getFullYear();
      let birthdateMonth = new Date(control.value).getMonth() + 1;
      let birthdateDay = new Date(control.value).getDate();
      let currentYear = new Date().getFullYear();
      let currentMonth = new Date().getMonth() + 1;
      let currentDay = new Date().getDate();
      
      
      if(currentYear - birthdateYear < 16){
        return { ageFormat: true };
      }
      if(currentYear - birthdateYear == 16){
         if(currentMonth < birthdateMonth){
          return { ageFormat: true };
         }
         else{
          if(currentDay < birthdateDay){
            return { ageFormat: true };
          }
         }
      }
      return null;
      
    };
  
  }

  
