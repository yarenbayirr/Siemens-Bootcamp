import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FakeserviceService } from 'src/app/fakeservice.service';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  posts : ReadonlyArray<Post> = [];
  inputValue : number | undefined;
  
  constructor(private fakeService: FakeserviceService){
    this.fakeService.getAll().subscribe(x=> this.posts = x);
  }
  
 search(id: number){
  this.fakeService.GetSearchByUserId(id).subscribe(x=>{
    this.posts = x;
  })
 }

  }

