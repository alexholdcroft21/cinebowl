import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http }  from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';

interface ArrayFilter {
  items:any;
}

@IonicPage()
@Component({
  selector: 'page-cinematimes',
  templateUrl: 'cinematimes.html',
})
export class CinematimesPage {

public items: ArrayFilter[];

  public filterby:any;
  public filterFilms:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public http: Http, ) {
    this.http.get("http://www.cinebowl.co.uk/app/validate.php").subscribe(result => {
           this.items = result.json() as ArrayFilter[];
       }, error => console.error(error));

  }

  ionViewWillEnter(){
   var filterby = localStorage.getItem('timebtn');
    localStorage.setItem('filterbybtn', filterby);
    console.log(filterby);
   this.filterFilms = { films_id: (localStorage.getItem('filterbybtn'))};
  };



  ionViewDidLeave(){
  localStorage.removeItem('filterbybtn');
  };
}
