import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
public cart:any[]=[];

  constructor() { }
cartshow():any[]{
  return this.cart;

}
cartadd(cartID:any){
  this.cart.push(cartID);
}
}
