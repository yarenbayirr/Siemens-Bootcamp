import { Component } from '@angular/core';
import { Post } from 'src/app/models/post';
import { User } from 'src/app/models/user';
import { ApiService } from 'src/app/services/api.service';
import { VisitorStateService } from 'src/app/services/visitor-state.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent {
  public postList:Post[] = [];
  public userList:User[] = [];
  constructor(public apiService: ApiService, public visitorService: VisitorStateService){
    this.apiService.getPosts().subscribe((x) => {
      this.postList = x;
    })
    this.apiService.getUsers().subscribe((x) => {
      this.userList = x;
    })
  }
  
}
