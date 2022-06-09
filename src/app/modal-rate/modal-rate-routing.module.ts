import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalRatePage } from './modal-rate.page';

const routes: Routes = [
  {
    path: '',
    component: ModalRatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalRatePageRoutingModule {}
