import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalWeaponsPageRoutingModule } from './modal-weapons-routing.module';

import { ModalWeaponsPage } from './modal-weapons.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalWeaponsPageRoutingModule
  ],
  declarations: [ModalWeaponsPage]
})
export class ModalWeaponsPageModule {}
