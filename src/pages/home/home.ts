import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { EditPage } from '../edit/edit';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  list:any = {
  };

  constructor(public navCtrl: NavController, private modalctrl:ModalController) {
  }

  editPage(){
    
    setTimeout(() => {
      this.list = {
        country:3,
        state:4,
        city:2
      };
      let modal = this.modalctrl.create(EditPage, {'data': this.list});
    modal.present();
    }, 2000)
  }

  addPage() {
    let modal = this.modalctrl.create(EditPage, {'data': this.list});
    modal.present();
  }

}
