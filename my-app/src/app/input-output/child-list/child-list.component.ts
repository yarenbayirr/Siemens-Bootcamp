import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-child-list',
  templateUrl: './child-list.component.html',
  styleUrls: ['./child-list.component.css']
})
export class ChildListComponent {
  @Input() posts : ReadonlyArray<Post> = [];
  
}
