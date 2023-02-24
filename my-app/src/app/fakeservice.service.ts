import { HttpClient, HttpHandler, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, finalize, find, forkJoin, from, map, of, switchMap, throwError } from 'rxjs';
import { Post } from './models/post';


@Injectable({
  providedIn: 'root'
})


export class FakeserviceService {

  constructor(private httpclient: HttpClient) { 
      
  } 

  getAll()
  {
   return this.httpclient.get<ReadonlyArray<Post>>('https://jsonplaceholder.typicode.com/posts')
  }
  GetSearchByUserId(id:number)
  {
    let params= new HttpParams().set('userId',id);
   return this.httpclient.get<ReadonlyArray<Post>>('https://jsonplaceholder.typicode.com/posts',{params:params})
  }

  

  
  

}


