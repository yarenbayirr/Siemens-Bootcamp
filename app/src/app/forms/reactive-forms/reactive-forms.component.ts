import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CategoryMenu } from 'app/models/category-menu';
import { Product } from 'app/models/product';
import { PublishMenu } from 'app/models/publish-menu';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent {
  newProduct : Product | undefined = undefined;
productForm = this.formBuilder.group({
  name: ['', [Validators.required, Validators.minLength(5)]],
  price: [0,[Validators.required, Validators.min(100),Validators.max(1000)]],
  stock: [0, [Validators.required, Validators.min(10),Validators.max(1000)]],
  category: ['', Validators.required],
  publish: ["2"],
});

categoryMenuList : CategoryMenu[] = [
  {id:1, text:"kalemler"},
  {id:2, text:"defterler"},
  {id:3, text:"silgiler"},
];

publishMenuList: PublishMenu[] = [
  {id:1, text:"3 ay"},
  {id:2, text:"6 ay"},
  {id:3, text:"9 ay"},
]


constructor(private formBuilder: FormBuilder){

}
save(){
  this.newProduct = this.productForm.value as Product;
  console.log(this.newProduct);
}
isInvalid(controlName: string) : boolean{
  let control = this.productForm.get(controlName)!;
  if(!(control.invalid && (control.dirty || control.touched))) return false;
  if(control.errors?.['required']) return true;
  if(control.errors?.['minlength']) return true;
  if(control.errors?.['maxlength']) return true;
  return false;
}
isValid(controlName : string){
  let control = this.productForm.get(controlName)!;
  return control.valid && (control.dirty || control.touched);
}
getControl(controlName:string){
  return this.productForm.get(controlName)!;
}
isInvalidControl(controlName:string, validationName:string){
  return this.getControl(controlName).errors?.[validationName];
}
}
