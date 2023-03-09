import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/models/post';
import {Comment } from 'src/app/models/comment';
import { PostapiService } from 'src/app/services/postapi.service';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit {
  comment?: Comment;
  post?:Post;
constructor( private activatedRoute: ActivatedRoute,
  private router: Router,
  private postApiService: PostapiService){}


  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];

    this.postApiService.getCommentsWithId(id).subscribe((x) => {
      this.comment = x;
    });

    this.activatedRoute.params.subscribe((param: any) => {
      console.log(param);
      this.postApiService.getCommentsWithId(param.id).subscribe((x) => {
        this.comment = x;
      });
    });
  }
}
