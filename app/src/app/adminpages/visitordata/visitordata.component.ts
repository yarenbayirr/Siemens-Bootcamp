import { Component } from '@angular/core';
import { NgConfirmService } from 'ng-confirm-box';
import { VisitorStateService } from 'src/app/services/visitor-state.service';

@Component({
  selector: 'app-visitordata',
  templateUrl: './visitordata.component.html',
  styleUrls: ['./visitordata.component.css']
})
export class VisitordataComponent {
  constructor(public visitorService: VisitorStateService, private confirmService: NgConfirmService){
    
  }
  isChecked: boolean = false;
  isDisabled: boolean = false;
  checkValue(event: any){
    this.isChecked =  !this.isChecked;
    this.isDisabled=true;  
 }

 deleteVisitor(email:string){
  this.confirmService.showConfirm('Are you sure you want to delete this visitor?', ()=> {
    this.visitorService.deleteVisitor(email);
  },
  () => {})
 
 }

}
