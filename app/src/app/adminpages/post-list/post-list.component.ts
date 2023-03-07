import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/post';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  postList: Post[] = [];
  constructor(private apiService: ApiService, private router: Router){
  }
  ngOnInit(): void {
    this.apiService.getPosts().subscribe((x) => {
      this.postList = x;
    });
  }

  goToPostDetail(id: number) {
    
    this.router.navigate(['/admin/comments-list',id]);
  }

}
