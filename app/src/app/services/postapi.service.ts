import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostapiService {

  constructor(private httpClient: HttpClient) { }
  
  getPosts(){
    return this.httpClient.get<Post[]>("https://jsonplaceholder.typicode.com/posts");
}


getCommentsWithId(id:number){
 return this.httpClient.get<any> (`https://jsonplaceholder.typicode.com/comments/${id}`);
}
}
