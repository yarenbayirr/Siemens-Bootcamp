import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectproviderService {
   private mySubject;
   public myObservableSubject = new Observable<any>()
  constructor() { 
    this.mySubject = new BehaviorSubject<any>(null)
    this.myObservableSubject = this.mySubject.asObservable();
  }
  publish(data: any){
    this.mySubject.next(data);
  }
  complete(){
    this.mySubject.complete();
  }
}
