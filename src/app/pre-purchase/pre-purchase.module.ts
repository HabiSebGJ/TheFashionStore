import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrePurchasePageRoutingModule } from './pre-purchase-routing.module';

import { PrePurchasePage } from './pre-purchase.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrePurchasePageRoutingModule
  ],
  declarations: [PrePurchasePage]
})
export class PrePurchasePageModule {}
