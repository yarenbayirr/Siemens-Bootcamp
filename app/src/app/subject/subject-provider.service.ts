import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectProviderService {
  public mySelectMenuObservable = new Subject();
  public myNameObservable = new Subject();
  private mysubject;
  public observableSubject = new Observable<any>()
  constructor() { 
    this.mysubject = new BehaviorSubject<any>(null);
    this.observableSubject = this.mysubject.asObservable();

  }
  publish(data: any){
    this.mysubject.next(data);
  }
  complete(){
    this.mysubject.complete();
  }
}
