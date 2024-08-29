import { Component, OnInit } from '@angular/core';
import { HttpService } from '../home/services/http.service';
import { CartService } from '../home/services/cart.service';
import { Shoppi } from '../interfaces/api';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-pre-purchase',
  templateUrl: './pre-purchase.page.html',
  styleUrls: ['./pre-purchase.page.scss'],
})
export class PrePurchasePage implements OnInit {

  constructor(private readonly httpSrv: HttpService, private readonly cartS: CartService) { }

public deta!: Shoppi;
  public id:any[]=this.cartS.cartshow();
async ngOnInit() {
    const url= environment.URL_BASE + 'products/' + this.id;
    this.deta= await this.httpSrv.get<Shoppi>(url);
    console.log(this.id);
  }


}
