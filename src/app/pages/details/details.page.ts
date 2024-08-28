import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/home/services/cart.service';
import { HttpService } from 'src/app/home/services/http.service';
import { Shoppi } from 'src/app/interfaces/api';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
public deta!:Shoppi;
  constructor(private readonly httpSrv: HttpService, private readonly show: ActivatedRoute, private readonly cartS: CartService) { }

 async ngOnInit() {
  this.show.params.subscribe(async(show)=>{
    const url= environment.URL_BASE + 'products/' + show['id'];
    console.log(show);
    this.deta= await this.httpSrv.get<Shoppi>(url);
    console.log(this.deta);
  }
  )}
  sendC(){
    this.cartS.cartadd({id: this.deta.id, price: this.deta.price, 
      title: this.deta.title, image: this.deta.image});
    console.log(this.cartS.cartshow());
  }
}
