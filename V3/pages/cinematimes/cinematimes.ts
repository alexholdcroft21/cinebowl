import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient }  from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
/**
 * Generated class for the CinematimesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cinematimes',
  templateUrl: 'cinematimes.html',
})
export class CinematimesPage {

  public items:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
        this.getTimes();
  }


  getTimes(){
    let url = "http://www.cinebowl.co.uk/app/times.php";
    let data: Observable<any> = this.http.get(url);
    data.subscribe(result =>{
      this.items = result;

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CinematimesPage');
      var y = localStorage.getItem('films_array_id');
      var filtered = json_array.filter(y);
  }



}
