import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalWeaponsPage } from './modal-weapons.page';

const routes: Routes = [
  {
    path: '',
    component: ModalWeaponsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalWeaponsPageRoutingModule {}
