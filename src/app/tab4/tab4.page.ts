import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';
import { RestService } from '../services/rest.service';
import { AlertController } from '@ionic/angular';
import { ModalRatePage } from '../modal-rate/modal-rate.page';



@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  events:any=[]
  eventsL:any=[]
  today:any
  user:any
  eventCheck=0
  constructor(private alertCtrl: AlertController, private modalCtrl: ModalController,private RestService: RestService, private route: Router,private loadingCtrl: LoadingController) { }

  ngOnInit() {
    console.log(this.RestService.events())
    this.user=this.RestService.user.id;
    this.today = new Date().toISOString().split('T')[0];
    this.getEvents()
  }
  async showLoading() {
    const loading = await this.loadingCtrl.create({  
    message: 'Loading.....'
    });  
    loading.present();
    setTimeout(() => {
      loading.dismiss();
      this.getEvents();
    }, 500 );
 }
  async presentAlert() {
    let alert = this.alertCtrl.create({
      header: 'Info:',
      subHeader: 'You are already inscribed in this event!',
      buttons: ['Dismiss']
    });
    (await alert).present();
  }
  async presentAlert2() {
    let alert2 = this.alertCtrl.create({
      header: 'Success',
      subHeader: 'Enrolled successfully',
      buttons: ['Dismiss']
    });
    (await alert2).present();
  }
  getEvents(){
    this.RestService.events().then(data => {
     this.events = data['success'];
     
 });

  }

  async createrateModal(event){
    const modal = await this.modalCtrl.create({
      component: ModalRatePage,
      componentProps: {
        event
      },
      
    
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
   this.showLoading();
  }
  closeModal(){
    this.modalCtrl.dismiss()
  }


  checkinscripted($event){
    this.RestService.eventsL()
      .then(data => {
        this.eventsL = data['success'];
        
      for (let index = 0; index < this.eventsL.length; index++) {
        
        if(this.eventsL[index].event_id==$event && this.eventsL[index].user_id==this.user){
          
          
        }
        else{
          this.eventCheck=this.eventCheck+1;
        }
        
        
        
    }
    console.log(this.eventsL.length)
    console.log(this.eventCheck)
    if(this.eventsL.length!=this.eventCheck){
      console.log(this.eventCheck)
      this.eventCheck=0
      this.presentAlert();
      }
    else{
      this.eventCheck=0
      console.log(this.eventCheck)
        this.inscription($event);
        this.presentAlert2();
        
    }
  });
}
  inscription($event) {

    this.RestService.inscribe(this.RestService.user.id, $event);
  }
}
