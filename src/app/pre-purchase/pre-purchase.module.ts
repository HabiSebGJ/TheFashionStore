import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrePurchasePageRoutingModule } from './pre-purchase-routing.module';

import { PrePurchasePage } from './pre-purchase.page';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpService } from '../home/services/http.service';
import { ItemcComponent } from '../card/itemc/itemc.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrePurchasePageRoutingModule,
    HttpClientModule
  ],
  declarations: [PrePurchasePage, ItemcComponent],
  providers:[HttpService]
})
export class PrePurchasePageModule {}
