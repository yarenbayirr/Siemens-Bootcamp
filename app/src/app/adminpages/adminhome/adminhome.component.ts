import { Component } from '@angular/core';
import { Post } from 'src/app/models/post';
import { User } from 'src/app/models/user';
import { PostapiService } from 'src/app/services/postapi.service';
import { UserapiService } from 'src/app/services/userapi.service';
import { VisitorStateService } from 'src/app/services/visitor-state.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent {
  public postList:Post[] = [];
  public userList:User[] = [];
  //public olabilir
  constructor(private userApiService: UserapiService, private postApiService : PostapiService, public visitorService: VisitorStateService){
    this.postApiService.getPosts().subscribe((x) => {
      this.postList = x;
    })
    this.userApiService.getUsers().subscribe((x) => {
      this.userList = x;
    })
  }
  
}
