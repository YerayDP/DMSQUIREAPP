import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-spells',
  templateUrl: './modal-spells.page.html',
  styleUrls: ['./modal-spells.page.scss'],
})
export class ModalSpellsPage implements OnInit {
  @Input() spellInfo : any;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  closeModal(){
    this.modalCtrl.dismiss()
  }
}
