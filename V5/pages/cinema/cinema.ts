import * as $ from 'jquery';
import { Component, Inject  } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http }  from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { CinematimesPage } from '../cinematimes/cinematimes';
import { Storage } from '@ionic/storage';

interface Array {
  items:any;
}

@IonicPage()
@Component({
  selector: 'page-cinema',
  templateUrl: 'cinema.html',
})

export class CinemaPage {

public apps: Array[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public http: Http) {
    this.http.get("http://www.cinebowl.co.uk/app/select.php").subscribe(result => {
           this.apps = result.json() as Array[];
       }, error => console.error(error));
  }

  ionViewDidLoad(){
    console.log('ionViewDidLoad CinemaPage');
    localStorage.removeItem('timebtn');
  }


toggleTime(){
  $(document).on('click', '.btn', function(){
       var fired_button = $(this).val();
        $("#hiddenid").attr({
          "value" : fired_button
        });
        var clickedid = (<HTMLInputElement>document.getElementById("hiddenid")).value;
        localStorage.setItem('timebtn', clickedid);
});

  this.navCtrl.push(CinematimesPage);
}
}
