import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalCreatePJPage } from './modal-create-pj.page';

const routes: Routes = [
  {
    path: '',
    component: ModalCreatePJPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalCreatePJPageRoutingModule {}
