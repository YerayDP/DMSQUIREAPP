import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalRatePageRoutingModule } from './modal-rate-routing.module';

import { ModalRatePage } from './modal-rate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalRatePageRoutingModule
  ],
  declarations: [ModalRatePage]
})
export class ModalRatePageModule {}
