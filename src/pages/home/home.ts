import { Component, ViewChild  } from '@angular/core';
import { NavController, AlertController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { MenuPage } from '../menu/menu';
import { LoginPage } from '../login/login';
import {Http, Headers, RequestOptions}  from "@angular/http";
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,
    private http: Http, public loading: LoadingController, public storage: Storage) {

 }



noLogin(){
  if ( localStorage.getItem("userName") === null){
    this.navCtrl.push(LoginPage)
  }else{
    this.navCtrl.push(MenuPage)
  }
}

}
