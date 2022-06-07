import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalWeaponsPage } from '../modal-weapons/modal-weapons.page';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  weapons:any=[]
  weaponsF:any=[]
  weaponsF2:any=[]
  constructor(private modalCtrl: ModalController,private RestService: RestService, private route: Router) {  }
  ngOnInit() {
    this.getWeapons();
  }
  getWeapons(){
   this.RestService.weapons().then(data => {
    this.weapons = data['success'];
    this.weaponsF=this.weapons;
    this.weaponsF2=this.weapons;
    
});


  }
  getItems(ev:any){

    this.weaponsF=this.weapons
    const val = ev.target.value;
    if (val && val.trim()!='') {
      this.weaponsF = this.weaponsF2.filter((item : any)=>{
        return (item.name.toLowerCase().indexOf(val.toLowerCase())>-1);
      })
    }
  }
  async weaponsModal(weaponInfo:any){
    const modal = await this.modalCtrl.create({
      component: ModalWeaponsPage,
      componentProps: {
        weaponInfo: weaponInfo,
      }
    });
    await modal.present();
  }

}
