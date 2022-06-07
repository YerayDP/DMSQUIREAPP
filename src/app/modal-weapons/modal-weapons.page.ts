import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-weapons',
  templateUrl: './modal-weapons.page.html',
  styleUrls: ['./modal-weapons.page.scss'],
})
export class ModalWeaponsPage implements OnInit {
  @Input() weaponInfo : any;
  constructor() { }

  ngOnInit() {
  }

}
