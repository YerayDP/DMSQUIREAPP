import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RestService } from '../services/rest.service';
 
@Component({
  selector: 'app-modal-rate',
  templateUrl: './modal-rate.page.html',
  styleUrls: ['./modal-rate.page.scss'],
})
export class ModalRatePage implements OnInit {
  @Input() event : any;
  rate:any
  commentary:any
  constructor(private modalCtrl: ModalController,private RestService: RestService) { }

  ngOnInit() {
  }
  closeModal(){
    this.modalCtrl.dismiss()
  }

  createRate() {
    
    console.log(this.RestService.user.id,this.event,this.rate, this.commentary)

    this.RestService.rate(this.RestService.user.id,this.event,this.rate, this.commentary);
   
    this.modalCtrl.dismiss();
  }
}
