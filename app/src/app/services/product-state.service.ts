import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductStateService {
  public product: Product[] = [];
  constructor() { }
}

export interface Product{
  id: number;
  name: string;
  price: number;
  color: string;
}
