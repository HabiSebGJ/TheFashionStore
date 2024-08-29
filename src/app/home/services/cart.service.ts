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


dropi(dropiC: number){
  const h= this.cart.findIndex((item)=>item.id == dropiC);
  if(h!= -1){
    this.cart.splice(h, 1)
  }
}
}
