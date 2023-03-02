import { Component, OnInit } from '@angular/core';
import { SubjectProviderService } from 'src/app/subject/subject-provider.service';

@Component({
  selector: 'page-app-subscriber1',
  templateUrl: './subscriber1.component.html',
  styleUrls: ['./subscriber1.component.css']
})
export class Subscriber1Component implements OnInit {
    selectedItemValue:number | undefined;
    name: string | undefined;
    constructor(private SubjectProviderService: SubjectProviderService){
    }
  ngOnInit(): void {
    this.SubjectProviderService.mySelectMenuObservable.subscribe(x => {
      this.selectedItemValue = x as number;
    })

    this.SubjectProviderService.myNameObservable.subscribe(x => {
      this.name = x as string;
    })
  }
}
