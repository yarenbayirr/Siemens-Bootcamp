import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Contentlist } from 'src/app/models/contentlist';
import { PublishList } from 'src/app/models/publishlist';
import { Visitor } from 'src/app/models/visitor';
import { VisitorStateService } from 'src/app/services/visitor-state.service';
import { AgeValidator } from 'src/app/validations/agevalidation';
import { ContentValidator } from 'src/app/validations/contentvalidation';
import { emailValidator } from 'src/app/validations/emailvalidation';

@Component({
  selector: 'app-visitorform',
  templateUrl: './visitorform.component.html',
  styleUrls: ['./visitorform.component.css']
})
export class VisitorformComponent {
 
   newVisitor : Visitor | undefined = undefined;
   visibilityAlertReject: boolean = false;
   visibilityAlertConfirm: boolean = false;
   
   constructor(private formBuilder: FormBuilder, public visitorService: VisitorStateService){
    
   }
   visitorForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, emailValidator()]],
    content: ['',[Validators.required, ContentValidator()]],
    birthDate: ['',[Validators.required, AgeValidator()]],
    publishdateExpire: ['1 month'],
    contentType: ['',[Validators.required]],
    isConfirmed: [false]
   })

   publishList: PublishList[]  = [
      {id: 1, text: "1 month"},
      {id: 2, text: "3 months"},
      {id: 3, text: "6 months"}
   ]

   contentList: Contentlist[]  = [
    {id: 1, text: "Comment"},
    {id: 2, text: "Complaint"},
 ]

 isInvalid(controlName: string) : boolean{
   let control = this.visitorForm.get(controlName)!;
   if(!(control.invalid && (control.dirty || control.touched))) return false;
   if(control.errors?.['required']) return true;
   if(control.errors?.['contentFormat']) return true;
   if(control.errors?.['ageFormat']) return true;
   if(control.errors?.['emailFormat']) return true;
   return false;
 }
 isValid(controlName : string){
   let control = this.visitorForm.get(controlName)!;
   return control.valid && (control.dirty || control.touched);
 }
 getControl(controlName:string){
   return this.visitorForm.get(controlName)!;
 }
 isInvalidControl(controlName:string, validationName:string){
   return this.getControl(controlName).errors?.[validationName];
 }
 
 closeAlert() {
   this.visibilityAlertReject = false;
   this.visibilityAlertConfirm = false;
 }

 save(){
  if(this.visitorForm.invalid){
    this.visibilityAlertReject = true;
    return;
  }
  this.visibilityAlertConfirm = true;
  this.visitorForm.controls['isConfirmed'].setValue(false);
  this.newVisitor = this.visitorForm.value as unknown as Visitor;
  this.newVisitor.name = this.newVisitor.name.toUpperCase();
  this.newVisitor.content = this.newVisitor.content[0].toLocaleUpperCase() + this.newVisitor.content.slice(1).toLowerCase();
  this.visitorService.addVisitor(this.newVisitor);
  console.log(this.visitorService.visitors);
  this.visitorService.resetForm(this.visitorForm);
}
}
