import { Component, OnInit } from '@angular/core';
import { HttpService } from './services/http.service';
import { environment } from 'src/environments/environment.prod';
import { Shoppi } from '../interfaces/api';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private readonly httpS: HttpService) {}

public products : Shoppi[]=[];
  async ngOnInit(){
   
    const link= environment.URL_BASE + "products";
    this.products= await this.httpS.get<Shoppi[]>(link);
    console.log(this.products);
  }

 async onOptionSelected(event:any){
    const link= environment.URL_BASE + "products";
    this.products= await this.httpS.get<Shoppi[]>(link +'/category/'+event.detail.value); 
  }
}
