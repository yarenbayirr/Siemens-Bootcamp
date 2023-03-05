import { Component } from '@angular/core';
import { VisitorStateService } from 'src/app/services/visitor-state.service';

@Component({
  selector: 'app-visitordata',
  templateUrl: './visitordata.component.html',
  styleUrls: ['./visitordata.component.css']
})
export class VisitordataComponent {
  constructor(public visitorService: VisitorStateService){
    
  }
  isChecked: boolean = false;
  isDisabled: boolean = false;
  checkValue(event: any){
    this.isChecked =  !this.isChecked;
    this.isDisabled=true;
    
 }

}
