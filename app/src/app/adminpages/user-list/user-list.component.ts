import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserapiService } from 'src/app/services/userapi.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  userList:User[];

  constructor(private router:Router,private userApiService:UserapiService){
    this.userList=[];
  }
  
  ngOnInit(): void {
     this.userApiService.getUsers().subscribe((x) => {
      this.userList = x;
    });
  }

   goToUserDetail(id: number) {
    this.router.navigate(['/admin/user-detail',id]);
  }
}
