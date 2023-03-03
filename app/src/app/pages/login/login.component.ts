import { Component } from '@angular/core';
import { UserStateService } from 'src/app/services/user-state.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private userState: UserStateService ){

  }
   login(){ //kendi componentinde eş zamanlı göremedik çünkü önce construcotr çalıştı sayfa yüklendi. başka bir componente geçip tekrar geldiğimde görebiliyorum.
        this.userState.currentUser = {id:1, name: "ahmet", email: "ahmet@outlook.com"}
   }
   change(){
    this.userState.currentUser!.email="mehmet@outlook.com"
   }
}
