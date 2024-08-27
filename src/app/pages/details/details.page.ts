import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private readonly httpSrv: HttpService, private readonly show: ActivatedRoute) { }

 async ngOnInit() {
  this.show.params.subscribe(async(show)=>{
    const url= environment.URL_BASE + 'products/' + show['id'];
    console.log(show);
    this.deta= await this.httpSrv.get<Shoppi>(url);
    console.log(this.deta);
  }
  )}

}
