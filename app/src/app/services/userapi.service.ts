import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserapiService {

  constructor(private httpClient: HttpClient) { }
  getUsers(){
    return this.httpClient.get<User[]>("https://jsonplaceholder.typicode.com/users")
   }

   getUsersById(id: number) {
     return this.httpClient.get<User>(
       `https://jsonplaceholder.typicode.com/users/${id}`
     );
   }
}
