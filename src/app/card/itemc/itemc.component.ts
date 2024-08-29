import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/home/services/cart.service';

@Component({
  selector: 'app-itemc',
  templateUrl: './itemc.component.html',
  styleUrls: ['./itemc.component.scss'],
})
export class ItemcComponent  implements OnInit {
@Input()rendering: any;
  constructor( private readonly cartS: CartService) { }

  ngOnInit() {}

  click(id:number ){
    this.cartS.dropi(id);
  }
}
