import { Component } from '@angular/core';
import { NavController, AlertController, NavParams } from 'ionic-angular';
import { MenuPage } from '../menu/menu';
import { LoyaltyPage } from '../loyalty/loyalty';
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,
   public loading: LoadingController, public storage: Storage) {

 }


noLogin(){
  if("userName" in localStorage){
      this.navCtrl.push(MenuPage);
  } else {
     this.navCtrl.push(LoyaltyPage);
  }
}

}
