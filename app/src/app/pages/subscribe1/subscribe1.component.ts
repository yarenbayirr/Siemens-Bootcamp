import { Component, OnInit } from '@angular/core';
import { SubjectproviderService } from '../subjectprovider.service';

@Component({
  selector: 'app-subscribe1',
  templateUrl: './subscribe1.component.html',
  styleUrls: ['./subscribe1.component.css']
})
export class Subscribe1Component implements OnInit {
  name: string | undefined;
  constructor(private subjectService: SubjectproviderService){
     
  }
  ngOnInit(): void {
    this.subjectService.myObservableSubject.subscribe
  }
  
}
