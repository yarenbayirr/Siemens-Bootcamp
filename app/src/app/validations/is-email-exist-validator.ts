import { AsyncValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";
import { UserService } from "app/forms/reactive-forms/user.service";
import { map, Observable } from "rxjs";

export function IsEmailExistValidator(userService: UserService) : AsyncValidatorFn {
    return (control: AbstractControl) => {
        return userService.searchByEmail(control.value).pipe(map((x) => (x.length > 0 ?  {isEmailMatch : true} : null )));
    }
}
