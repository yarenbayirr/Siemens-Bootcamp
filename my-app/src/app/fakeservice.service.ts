import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, map, switchMap } from 'rxjs';
import { Post } from './models/post';

@Injectable({
  providedIn: 'root'
})
export class FakeserviceService {

  constructor(private httpclient: HttpClient) { } //tarayıcılar sadece http protokulunu bilirler. rest mimarisi(api) http protokolu üzerine kuruludur.

  // getPosts(){
  //     return this.httpclient.get<Post[]>("https://jsonplaceholder.typicode.com/posts").pipe(switchMap(x=>from(x)), map(x=>`${x.id} - ${x.title}`)) //bir dizin dönecek tipini bilmiyoruz ama dizin olduğunu belirttik. pipe ı sonradan ekledik. dizin olarak değil tek tek dönecek ve üzerinde oynama yapacağım. örn sadece title ve id olarak dönmek istedik ve yan yana yazsın istedik. switchmap kullandık
  // }

  //id si 1 olanları çekmek istersek
  //1.yol (kötü)
  // getPosts(){
  //   let userId=1;
  //   return this.httpclient.get<Post[]>(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`).pipe(switchMap(x=>from(x)), map(x=>`${x.id} - ${x.title}`)) 

  //id si 1 olanları çekmek istersek
    //2.yol(iyi)
    getPosts(){
      let userId=1;
      const params = new HttpParams().set('userId', '1').set('abc', 'abc');
      return this.httpclient.get<Post[]>(`https://jsonplaceholder.typicode.com/posts?`, {params}).pipe(switchMap(x=>from(x)), map(x=>`${x.id} - ${x.title}`)) 
}
}
