import { HttpClient, HttpHandler, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, finalize, find, forkJoin, from, map, of, switchMap, throwError } from 'rxjs';
import { Album } from './models/album';
import { Post } from './models/post';
import { Postupdate } from './models/postupdate';
import { Todos } from './models/todos';

@Injectable({
  providedIn: 'root'
})

//backend ile haberleşmek için her zaman servis dosyası olur. 
//her data aldığımda subscribe kullanıcaz
export class FakeserviceService {

  constructor(private httpclient: HttpClient) { 

  } //tarayıcılar sadece http protokulunu bilirler. rest mimarisi(api) http protokolu üzerine kuruludur.


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

    GetPostWithHeader(){
  var myheaders = new HttpHeaders().set("authorization", "my token");
  return this.httpclient.get<Post[]>(`https://jsonplaceholder.typicode.com/posts`, {headers : myheaders});

}

   SavePost(newPost : Post){
     return this.httpclient.post<any>('https://jsonplaceholder.typicode.com/posts', newPost);
   }

   SavePostWithError(newPost : Post){
    return this.httpclient.post<any>('https://jsonplaceholder.typicode.com/posts', newPost).pipe(catchError(err=>{
      console.log(err);
      return throwError(()=> new Error("Bir hata meydana geldi"));
    }),finalize(()=>console.log("final")))
  }

  UpdatePut(updatepost: Postupdate){
    return this.httpclient.put<any>(`https://jsonplaceholder.typicode.com/posts/${updatepost.id}`, updatepost);
}

//ARKA ARKAYA İKİ İSTEK YAPMAK
getParallelRequest(){
  var post = this.httpclient.get('https://jsonplaceholder.typicode.com/posts')
  var users = this.httpclient.get('https://jsonplaceholder.typicode.com/users')
  return { postObservable : post, userObservable: users}
}

//aynı anda başlatmak için aşağıdaki kod!!!
getParallelRequestWithForkJoin(){
  return forkJoin({posts: this.httpclient.get('https://jsonplaceholder.typicode.com/posts'),
  users:this.httpclient.get('https://jsonplaceholder.typicode.com/users')
    
  })
}

//örn: userlardan ilk olanın id sini alıp o id de postları alıcam
//good practise way
getUserWithUserId(id: number){
  return this.httpclient.get<any[]>('https://jsonplaceholder.typicode.com/users').pipe(  //önce userı aldık geriye dizin döndü. ama tek nesne lazım o yüzden switch map kullandık. id si 1 olan nesne dönüyor artık. sonra ikinci istek için switch map kullandık. post lardan user id si 1 olanları aldık
    switchMap(x=>from(x)),
    find(x=> x.id == id), 
    switchMap(x=> this.httpclient.get<any[]>(`https://jsonplaceholder.typicode.com/posts?userId=${x.id}`)));
    //iç içe subscribe kullanabilirdik ama olmaz, iç içe subscribe görürsek switchmap kullanmak daha iyi

}

//DERS İÇİ UYGULAMA:
//TODO OLAN DAN ALINAN USER ID YI AL (MESELA USER ID SI 2 OLAN) ALBÜMLERDEKİ USER ID Sİ EŞİT OLANI BULACAKSIN
getAlbumWithUserId(userid:number){
  return this.httpclient.get<Todos[]>('https://jsonplaceholder.typicode.com/todos').pipe(
    switchMap(x=>from(x)),
    find(x=>x.userId == userid),
    switchMap(x=>this.httpclient.get<Album[]>(`https://jsonplaceholder.typicode.com/albums?userId=${x?.userId}`)));

}
  

}


