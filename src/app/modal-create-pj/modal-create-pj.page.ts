import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-modal-create-pj',
  templateUrl: './modal-create-pj.page.html',
  styleUrls: ['./modal-create-pj.page.scss'],
})
export class ModalCreatePJPage implements OnInit {
  name:any
  level:any
  alignment:any
  max:any[]=['Lawful Good',
  'Neutral Good',
  'Chaotic Good',
  'Lawful Neutral',
  'Neutral Neutral',
  'Chaotic Neutral',
'Lawful Good',
  'Neutral Evil',
  'Chaotic Evil',]
  STR:any
  DEX:any
  CON:any
  INTE:any
  WIS:any
  CHARI:any
  categorys:any
  races:any
  backgrounds:any
  category_id:any
  race_id:any
  background_id:any
  constructor(private modalCtrl: ModalController,private RestService: RestService) { }

  ngOnInit() {
    console.log(this.RestService.user.id)
    this.get();
  }
  closeModal(){
    this.modalCtrl.dismiss()
  }
  get(){
  this.RestService.backgrounds().then(data => {
      this.backgrounds = data['success'];
      console.log(this.backgrounds)

  });this.RestService.categories().then(data => {
    this.categorys = data['success'];
    
  });this.RestService.races().then(data => {
    this.races = data['success'];
    
});

  }
  createPJ() {
    
    console.log(this.name, this.level,this.alignment,this.STR,this.DEX, this.CON,this.INTE, this.WIS,this.CHARI,this.RestService.user.id,this.background_id, this.race_id, this.category_id)

    this.RestService.createPJ(this.name, this.level,this.alignment,this.STR,this.DEX, this.CON,this.INTE, this.WIS,this.CHARI,this.RestService.user.id,this.background_id, this.race_id, this.category_id);
   
    this.modalCtrl.dismiss();
  }
}
