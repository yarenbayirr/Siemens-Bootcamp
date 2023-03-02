import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser : User | null = null;

  constructor() { 
    this.currentUser = {id:1, name: "Yaren"}
  }
  isAuthenticate(){
    return this.currentUser != null;
  }
}

export interface User{
  id: number;
  name:string;
}
