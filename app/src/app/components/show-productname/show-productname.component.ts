import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-show-productname',
  templateUrl: './show-productname.component.html',
  styleUrls: ['./show-productname.component.css']
})
export class ShowProductnameComponent implements OnInit, OnChanges, DoCheck{
  @Input() productName: string = '';

   //çalışma sırası önce : constructor, onchange, oninit

  constructor(){
    console.log("Constructor method");
    //değişkenin ilk değeri verilir
    this.productName = '';
  }
  ngDoCheck(): void {  //işe yarayan hook değil
    throw new Error('Method not implemented.');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChange", changes); //önceki değişiklikleri saklar
  }
  ngOnInit() : void {
    console.log("ngOnInıtMethod");
  }
}
