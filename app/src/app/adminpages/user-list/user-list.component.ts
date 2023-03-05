import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  userList:User[];

  constructor(private router:Router,private apiService:ApiService){
    this.userList=[];
  }
  
  ngOnInit(): void {
     this.apiService.getUsers().subscribe((x) => {
      this.userList = x;
    });
  }

   goToUserDetail(id: number) {
    // this.router.navigateByUrl(`/post-detail/${id}`);
    this.router.navigate(['/admin/user-detail',id]);
  }
}
