import { Component, ɵisObservable } from '@angular/core';
import { filter, find, first, from, interval, map, Observable, of, range, take, takeLast, timer } from 'rxjs';
import {ajax} from 'rxjs/ajax';
import { FakeserviceService } from './fakeservice.service';

interface Product{
  id: number;
  name: string;
  price: number;

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  constructor(private fakeService: FakeserviceService){
    // let ofOperator = of(1,2,3,4,5);
    // ofOperator.subscribe(x=>{              //üye olmak gibi. Eş zamanlı datanın gitmesi için
    //   console.log(x);
    // })

    //  let subscriber1 = ofOperator.subscribe(x=>{
    //   console.log(x);
    // })
    // subscriber1.unsubscribe() //üyelikten çıkmak

    // interval(1000).subscribe(x=>{         //saniyede bir konsola yazmak
    //   console.log(x)
    // })

    // timer(5000).subscribe(x=>{           //açıldıktan 5 sn sonra
    //   console.log(x);
    //   alert("kampanya var");
    // })

    // range(1,20).subscribe(x=>{              //1 den 20 ye kadar teker teker yazdırıyor
    //   console.log(x);
    // })


    //ajax---endpointten datayı çekiyo
    // ajax.getJSON("https://jsonplaceholder.typicode.com/todos/1").subscribe(x=>{
    //   console.log(x);
    // })

    //sıfırdan bir observable oluşturmak 
    // var myobservable = Observable.create((observer:any) => {    
    //   observer.next('Hey guys!')
    //   observer.next('Hey guys 2!')
    //   observer.next('Hey guys 3!')
    //   observer.complete();
      
    // })


    //  myobservable.subscribe((x:any) => {             //2.yol kısa yol, sadece başarılı durumda ele alınır 
    //   console.log(x);
    //  })

    //  myobservable.subscribe({
    //   next: (value:any)=> console.log(value),
    //   error: (err: Error) => {console.log(err)},
    //   complete: () => {console.log("işlem tamamlandı")}

    //  })

    //filter operator
    //first operator
    var fromOperator = from([10,20,30,40,50,60,70]);
    var fromOperatorbyProduct = from([
      {id:1, name: "kalem 1", price:100},
      {id:2, name: "kalem 2", price:200},
      {id:3, name: "kalem 3", price:300}
    ])
    // fromOperator.pipe(first()).subscribe(x=> {                //pipe() komutu ile boru hattı inşa ettik.içine first() metodu ekledik. bana ilk elemanı getir demiş olduk.
    //   console.log(x);
    // })                                                        //içini boş bıraksak bütün elemanlar geliyor
    
    //find operator 
    // fromOperator.pipe(find(x=>x>30)).subscribe(x => {
    //   console.log(x);
    // })

    // fromOperatorbyProduct.pipe(find(x=>x.id ==2)).subscribe(x => {
    //   console.log(x);
    // })

    //filter operator
    // fromOperatorbyProduct.pipe(filter(x=> x.id ==2)).subscribe(x=>{
    //   console.log(x);
    // })
    
    //take operator
    // fromOperatorbyProduct.pipe(take(2)).subscribe(x=>{
    //   console.log(x);
    // })

    //takeLast operator
    // fromOperatorbyProduct.pipe(takeLast(2)).subscribe(x=>{
    //   console.log(x);
    // })

    //map operatoru
    // fromOperator.pipe(map(x=>x*2)).subscribe(x=>{
    //   console.log(x);
    // })

    //httpclient ile istek atmak ve data çekmek
    // this.fakeService.getPosts().subscribe(x=>{
    //   x.forEach(element => {
    //     console.log({id: element.id, body:element.body})
    //   });
    // })

    // this.fakeService.getPosts().subscribe(x=>{
    //  console.log(x);
    // })


    // this.fakeService.GetPostWithHeader().subscribe(x=>{
    //   console.log(x);
    //  })

    //  this.fakeService.SavePostWithError({id:1, title:'title 1', body: 'body 1', userId:2}).subscribe({
    //   next: (data) => console.log(data),
    //   error: (err) => console.log(err.message),
    //   complete: () => console.log("tamamlandı")
    //  })


    //  this.fakeService.UpdatePut({id:1, title:'title 1', body: 'body 1', userId:2}).subscribe({
    //   next: (data) => console.log(data),
    //   error: (err) => console.log(err.message),
    //   complete: () => console.log("tamamlandı")
    //  })

    //  //arka arkaya istek atmak almak, çok sürdülebilir değil !!! (aşağıdaki kod)
    //  this.fakeService.getParallelRequest().postObservable.subscribe(x=>console.log(x))
    //  this.fakeService.getParallelRequest().userObservable.subscribe(x=>console.log(x))

    //  //aynı anda aşağıdaki kod
    //  this.fakeService.getParallelRequestWithForkJoin().subscribe(x=>console.log(x.posts));

    //  this.fakeService.getUserWithUserId(1).subscribe(x=>{
    //   console.log(x);
    //  })

     this.fakeService.getAlbumWithUserId(1).subscribe(x=>{
      console.log(x);
     })
  }
}
