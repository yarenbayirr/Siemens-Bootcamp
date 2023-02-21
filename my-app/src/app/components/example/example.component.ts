import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {
  names:string[] = [];
  indexToUpdate : number | null = null;
  add(name:string){
    console.log(name);
    if(this.indexToUpdate != null){
      this.names[this.indexToUpdate] = name;
      this.indexToUpdate = null;
    }
    else{
      this.names.push(name);
    }
    
  }
  remove(name: string){
    this.names = this.names.filter(x=>x != name);
  }
  update(index:number, newName : string){
    this.names[index] = newName;
  }
}
