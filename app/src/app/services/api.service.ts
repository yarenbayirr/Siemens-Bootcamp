import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { find, from, switchMap } from 'rxjs';
import { Post } from '../models/post';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }
  posts: Post[] = [];
  users: User[] = [];
  getPosts(){
      this.httpClient.get<Post[]>("https://jsonplaceholder.typicode.com/posts").subscribe((x)=> {
      this.posts = x;
    })
  }

  getCommentsWithId(id:number){
    this.httpClient.get<Post[]>("https://jsonplaceholder.typicode.com/comments").pipe(
      switchMap(x=>from(x)),
      find(x=>x.id == id),
      switchMap(x=>this.httpClient.get<Comment[]>(`https://jsonplaceholder.typicode.com/comments?postId=${x?.id}`))
    )
  }

  getUsers(){
    this.httpClient.get<User[]>("https://jsonplaceholder.typicode.com/users").subscribe((x)=> {
      this.users = x;
    })
  }
}
