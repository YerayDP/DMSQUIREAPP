import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-spells',
  templateUrl: './modal-spells.page.html',
  styleUrls: ['./modal-spells.page.scss'],
})
export class ModalSpellsPage implements OnInit {
  @Input() spellInfo : any;
  constructor() { }

  ngOnInit() {
  }

}
