import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostapiService } from 'src/app/services/postapi.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  postList: Post[] = [];
  constructor(private postApiService: PostapiService, private router: Router){
  }
  ngOnInit(): void {
    this.postApiService.getPosts().subscribe((x) => {
      this.postList = x;
    });
  }

  goToPostDetail(id: number) {
    
    this.router.navigate(['/admin/comments-list',id]);
  }

}
