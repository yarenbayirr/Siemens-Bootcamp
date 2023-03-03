import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserStateService {
  currentUser: User | undefined;
  constructor() { }
}

export class User{
  constructor(public id: number, public name: string, public email:string){

  }
}
