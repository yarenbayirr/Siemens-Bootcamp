import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RealProductAPIService {

  constructor() { }
  save(name:String){
    console.log("Gerçek apiye istek atılarak kayıt oluşturuldu");
  }
  getAll(): string[]{
    return ["real ahmet", "real mehmet", "real hasan"];
  }
}
