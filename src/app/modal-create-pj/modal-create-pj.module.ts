import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalCreatePJPageRoutingModule } from './modal-create-pj-routing.module';

import { ModalCreatePJPage } from './modal-create-pj.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalCreatePJPageRoutingModule
  ],
  declarations: [ModalCreatePJPage]
})
export class ModalCreatePJPageModule {}
