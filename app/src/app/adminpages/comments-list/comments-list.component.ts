import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/models/post';
import { ApiService } from 'src/app/services/api.service';
import {Comment } from 'src/app/models/comment';

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
  private postService: ApiService){}


  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];

    this.postService.getCommentsWithId(id).subscribe((x) => {
      this.comment = x;
    });

    this.activatedRoute.params.subscribe((param: any) => {
      console.log(param);
      this.postService.getCommentsWithId(param.id).subscribe((x) => {
        this.comment = x;
      });
    });
  }
}
