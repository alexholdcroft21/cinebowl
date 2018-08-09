import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient }  from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
/**
 * Generated class for the CinemaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-cinema',
  templateUrl: 'cinema.html',
})
export class CinemaPage {

  public items:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.getData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CinemaPage');
  }

  getData(){
    let url = "http://www.cinebowl.co.uk/app/select.php";
    let data: Observable<any> = this.http.get(url);
    data.subscribe(result =>{
      this.items = result;
    });
  }
}
