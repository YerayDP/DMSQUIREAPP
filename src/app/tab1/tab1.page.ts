import { Component } from '@angular/core';
import { RestService } from '../services/rest.service';
import { ModalCreatePJPage } from '../modal-create-pj/modal-create-pj.page';
import { LoadingController, ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  category_id:any;
  race_id:any;
  background_id:any
  pjs:any[] = [];

  constructor(private RestService: RestService,private modalCtrl: ModalController,private alertController: AlertController,private loadingCtrl: LoadingController) {}

  ngOnInit() {
    this.getPJ();
  }
  async showLoading() {
    const loading = await this.loadingCtrl.create({  
    message: 'Loading.....'
    });  
    loading.present();
    setTimeout(() => {
      loading.dismiss();
      this.getPJ();
    }, 500 );
 }
  showConfirm($ev) {
    this.alertController.create({
      header: 'Confirm Alert',
      subHeader: 'Beware lets confirm',
      message: 'Are you sure? you want to leave without safty mask?',
      buttons: [
        {
          text: 'Not Sure',
          handler: () => {
            ;
          }
        },
        {
          text: 'Yes!',
          handler: () => {
            this.RestService.deletePJ($ev);
            this.showLoading()
          }
        }
      ]
    }).then(res => {
      res.present();
    });
  }
  getPJ()
  {
    this.RestService.PJs().then(data => {
      this.pjs = data['success'];
  });
  }
  async createpjModal(){
    const modal = await this.modalCtrl.create({
      component: ModalCreatePJPage,
      componentProps: {
        
      },
      
    
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
   this.showLoading();
  }
  closeModal(){
    this.modalCtrl.dismiss()
  }
}
