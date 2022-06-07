import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalSpellsPage } from './modal-spells.page';

const routes: Routes = [
  {
    path: '',
    component: ModalSpellsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalSpellsPageRoutingModule {}
