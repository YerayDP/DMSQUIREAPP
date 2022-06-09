import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RestService } from '../services/rest.service';
@Component({
  selector: 'app-modal-register',
  templateUrl: './modal-register.page.html',
  styleUrls: ['./modal-register.page.scss'],
})
export class ModalRegisterPage implements OnInit {
  firstname:any
  secondname:any
  email:any
  password:any
  constructor(private RestService: RestService,private modalCtrl: ModalController) { }

  ngOnInit() {
  }
  closeModal(){
    this.modalCtrl.dismiss()
  }
  createRegister() {
    
    

    this.RestService.register(this.firstname,this.secondname,this.email, this.password);
   
    this.modalCtrl.dismiss();
  }
}
