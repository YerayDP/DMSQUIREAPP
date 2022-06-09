import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-weapons',
  templateUrl: './modal-weapons.page.html',
  styleUrls: ['./modal-weapons.page.scss'],
})
export class ModalWeaponsPage implements OnInit {
  @Input() weaponInfo : any;
  constructor(private modalCtrl: ModalController,) { }

  ngOnInit() {
  }
  closeModal(){
    this.modalCtrl.dismiss()
  }
  

}
