import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { SubjectProviderService } from 'src/app/subject/subject-provider.service';

@Component({
  selector: 'app-publisher-page',
  templateUrl: './publisher.component.html',
  styleUrls: ['./publisher.component.css']
})
export class PublisherComponent implements OnInit {
  constructor(private subjectServiceProvider: SubjectProviderService){

  }
  ngOnInit(): void {
  
  }
  mySelectMenu: NgModel | undefined;
  name: string | undefined;
  change(data: any){
       console.log(data);
       this.subjectServiceProvider.mySelectMenuObservable.next(data)
  }
  changeName(){
    this.subjectServiceProvider.mySelectMenuObservable.next(this.name)
  }
}
