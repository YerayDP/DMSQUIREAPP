import { Component, OnInit } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { RestService } from '../services/rest.service';
import { Router } from '@angular/router';
import { ModalSpellsPage } from '../modal-spells/modal-spells.page';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  spells:any=[]
  spellsF:any=[]
  spellsF2:any=[]
  constructor(private modalCtrl: ModalController,private RestService: RestService, private route: Router) {  }
  ngOnInit() {
    this.getSpells();
  }
  getSpells(){
   this.RestService.spells().then(data => {
    this.spells = data['success'];
    this.spellsF=this.spells;
    this.spellsF2=this.spells;
    
});


  }
  getItems(ev:any){

    this.spellsF=this.spells
    const val = ev.target.value;
    if (val && val.trim()!='') {
      this.spellsF = this.spellsF2.filter((item : any)=>{
        return (item.name.toLowerCase().indexOf(val.toLowerCase())>-1);
      })
    }
  }
  async spellsModal(spellInfo:any){
    const modal = await this.modalCtrl.create({
      component: ModalSpellsPage,
      componentProps: {
        spellInfo: spellInfo,
      }
    });
    await modal.present();
  }
}
