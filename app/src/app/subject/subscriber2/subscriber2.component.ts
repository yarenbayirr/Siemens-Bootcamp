import { Component } from '@angular/core';
import { SubjectProviderService } from '../subject-provider.service';

@Component({
  selector: 'app-subscriber2',
  templateUrl: './subscriber2.component.html',
  styleUrls: ['./subscriber2.component.css']
})
export class Subscriber2Component {
  constructor(private SubjectProviderService: SubjectProviderService){
    this.SubjectProviderService.observableSubject.subscribe(x=> {
      console.log("Subscriber2",x);
    })
  }
}
