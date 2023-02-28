import { AsyncValidatorFn, AbstractControl } from "@angular/forms";
import { PostService } from "app/forms/reactive-forms/post.service";
import { map } from "rxjs";

export function ExistProductNameValidator(
    postService: PostService
): AsyncValidatorFn {
    return (control: AbstractControl) =>{
        return postService
        .searchByProductName(control.value)
        .pipe(map((x) => (x.length > 0 ? {productExist: true} : null)));
    }
}