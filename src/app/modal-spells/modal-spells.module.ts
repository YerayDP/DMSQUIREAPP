import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalSpellsPageRoutingModule } from './modal-spells-routing.module';

import { ModalSpellsPage } from './modal-spells.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalSpellsPageRoutingModule
  ],
  declarations: [ModalSpellsPage]
})
export class ModalSpellsPageModule {}
