import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from 'app/models/user';
import { emailValidator } from 'app/validations/email-validator';
import { IsEmailExistValidator } from 'app/validations/is-email-exist-validator';
import { passwordValidator } from 'app/validations/password-validator';
import { UserService } from './user.service';


@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent {
  newUser : User | undefined = undefined;
  userForm = this.formBuilder.group({
  email: ['', [Validators.required, emailValidator(), IsEmailExistValidator(this.userService)],
],
  rememberMe:[false],
  password: ['', [Validators.required, passwordValidator()]],
},);


constructor(private formBuilder: FormBuilder, private userService: UserService){

}
save(){
  if(this.userForm.invalid){
    alert("Please fill in all fields");
    return;
  }
  this.newUser = this.userForm.value as User;
  console.log(this.newUser);
  alert("Succesfully signed");

}
isInvalid(controlName: string) : boolean{
  let control = this.userForm.get(controlName)!;
  if(!(control.invalid && (control.dirty || control.touched))) return false;
  if(control.errors?.['required']) return true;
  if(control.errors?.['minlength']) return true;
  if(control.errors?.['maxlength']) return true;
  if(control.errors?.['max']) return true;
  if(control.errors?.['min']) return true;
  if(control.errors?.['passwordFormat']) return true;
  if(control.errors?.['emailFormat']) return true;
  if(control.errors?.['isEmailMatch'] == null) return true;
  return false;
}
isValid(controlName : string){
  let control = this.userForm.get(controlName)!;
  return control.valid && (control.dirty || control.touched);
}
getControl(controlName:string){
  return this.userForm.get(controlName)!;
}
isInvalidControl(controlName:string, validationName:string){
  return this.getControl(controlName).errors?.[validationName];
}

hide : boolean = true;

ShowPassword() {
  this.hide = !this.hide;
}
}


