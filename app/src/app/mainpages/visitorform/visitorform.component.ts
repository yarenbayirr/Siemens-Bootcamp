import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Contentlist } from 'src/app/models/contentlist';
import { PublishList } from 'src/app/models/publishlist';
import { Visitor } from 'src/app/models/visitor';
import { VisitorStateService } from 'src/app/services/visitor-state.service';

@Component({
  selector: 'app-visitorform',
  templateUrl: './visitorform.component.html',
  styleUrls: ['./visitorform.component.css']
})
export class VisitorformComponent {
   newVisitor : Visitor | undefined = undefined;
   constructor(private formBuilder: FormBuilder, private visitorService: VisitorStateService){
    
   }
   visitorForm = this.formBuilder.group({
    name: [''],
    email: [''],
    content: [''],
    birthDate: [new Date()],
    publishdateExpire: ['1 month'],
    contentType: [''],
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
 save(){
  // if(this.productForm.invalid){
  //   alert("Lütfen tüm alanları doldurunuz")
  //   return;
  // }
  this.visitorForm.controls['isConfirmed'].setValue(false);
  this.newVisitor = this.visitorForm.value as Visitor;
  this.visitorService.addVisitor(this.newVisitor);
  console.log(this.visitorService.visitors);
  this.visitorService.resetForm(this.visitorForm);
}
}
