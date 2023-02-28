import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, from, switchMap, toArray } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private client: HttpClient) {}

  searchByEmail(email: string) {
    return this.client
      .get<any[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(
        switchMap((x) => from(x)),
        filter((x) => x.email.includes(email)),
        toArray()
      );
  }
}
