import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrePurchasePage } from './pre-purchase.page';

const routes: Routes = [
  {
    path: '',
    component: PrePurchasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrePurchasePageRoutingModule {}
