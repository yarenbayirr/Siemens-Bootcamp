import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-child-header',
  templateUrl: './child-header.component.html',
  styleUrls: ['./child-header.component.css']
})
export class ChildHeaderComponent {

  
  @Output() searchClick = new EventEmitter<number>();
  search(text: any){
      this.searchClick.emit(text as number);
  }

}
