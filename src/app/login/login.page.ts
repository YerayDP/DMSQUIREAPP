import { Component, OnInit } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { RestService } from '../services/rest.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalRegisterPage } from '../modal-register/modal-register.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    mail: any;
    pass: any;
    tokenLog: any;
    usuarios: any=[];
  constructor(private RestService: RestService, private route: Router, private modalCtrl: ModalController,) {  }

  ngOnInit() {
    
 }
 log() {
  console.log(this.mail,this.pass)
  this.RestService.login(this.mail, this.pass);
}
async modalRegister(){
  const modal = await this.modalCtrl.create({
    component: ModalRegisterPage,
    componentProps: {
      
    },
    
  
  });
  await modal.present();
  const { data } = await modal.onDidDismiss();
 
}
closeModal(){
  this.modalCtrl.dismiss()
}
guardarDatos(){
  console.log(this.mail);
}
check(){

  this.RestService.login(this.mail, this.pass).then(data => {
    this.tokenLog=data;//token
    
    
      if (this.RestService.checkActived==1) {
        this.route.navigate(['/tabs/tabs/tab1']);
        

      }else{

        this.route.navigate(['/login']);
        
      }
  
    
  });
  

}

}

