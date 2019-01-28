import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {

  public manageContact:any  = {}

  public countryList: any = [];
  public stateList: any = []; 
  public cityList: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewctrl:ViewController) {
    //console.log(this.navParams.get('data'))
    if(this.navParams.get('data')) {
      this.manageContact = this.navParams.get('data');
      console.log(this.manageContact)
      this.getState();
      this.getCities();
    }
  
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPage');
    setTimeout(() => {
      this.countryList = [
        {
          created_at: "2017-12-15 10:39:04",
id: 1,
name: "Afghanistan",
phonecode: 0,
sortname: "sd",
updated_at: "2017-12-15 10:39:04",
        },
        {created_at: "2017-12-15 10:39:04",
        id: 2,
        name: "Testin2",
        phonecode: 0,
        sortname: "asd",
        updated_at: "2017-12-15 10:39:04",
        },
        {
          created_at: "2017-12-15 10:39:04",
          id: 3,
          name: "Testin3",
          phonecode: 0,
          sortname: "AsadF",
          updated_at: "2017-12-15 10:39:04",
        }
      ];
     
    }, 5000)
   
  }

  getState() {
    setTimeout(() => {
      this.stateList = [
        {
          created_at: "2017-12-15 10:39:04",
id: 1,
state: "state1",
phonecode: 0,
sortname: "sd",
updated_at: "2017-12-15 10:39:04",
        },
        {created_at: "2017-12-15 10:39:04",
        id: 2,
        state: "state2",
        phonecode: 2,
        sortname: "asd",
        updated_at: "2017-12-15 10:39:04",
        },
        {
          created_at: "2017-12-15 10:39:04",
          id: 4,
          state: "state3",
          phonecode: 0,
          sortname: "AsadF",
          updated_at: "2017-12-15 10:39:04",
        }
      ];
    }, 5000)
   
  }

  getCities() {
    setTimeout(() => {
      this.cityList = [ {
        created_at: "2017-12-15 10:39:04",
id: 1,
name: "city1",
phonecode: 0,
sortname: "sd",
updated_at: "2017-12-15 10:39:04",
      },
      {created_at: "2017-12-15 10:39:04",
      id: 2,
      name: "city2",
      phonecode: 0,
      sortname: "asd",
      updated_at: "2017-12-15 10:39:04",
      },
      {
        created_at: "2017-12-15 10:39:04",
        id: 4,
        name: "city3",
        phonecode: 0,
        sortname: "AsadF",
        updated_at: "2017-12-15 10:39:04",
      }];
    }, 5000)
 
  }

  onSubmit(f) {
    console.log(f.value)
    f.reset();
    this.viewctrl.dismiss();
  }

  dismiss() {
    this.viewctrl.dismiss();
  }
}
