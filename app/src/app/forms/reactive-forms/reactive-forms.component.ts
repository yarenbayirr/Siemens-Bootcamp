import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from 'app/models/user';
import { emailValidator } from 'app/validations/email-validator';
import { passwordValidator } from 'app/validations/password-validator';
import { PublishStartEndDataValidator } from 'app/validations/publish-start-end-date-validator';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent {
  newUser : User | undefined = undefined;
  userForm = this.formBuilder.group({
  email: ['', [Validators.required, emailValidator()]],
  isPublish:[false],
  password: ['', [Validators.required, passwordValidator()]],
},);


constructor(private formBuilder: FormBuilder){

}
save(){
  this.newUser = this.userForm.value as User;
  console.log(this.newUser);
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
}


