import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient }  from "@angular/common/http";
import { Observable } from 'rxjs/Observable';

export interface FilmsI {
  films_id: any;
}

@IonicPage()
@Component({
  selector: 'page-cinematimes',
  templateUrl: 'cinematimes.html',
})
export class CinematimesPage {

  public items:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.getData();
  }


  getData(){
    let url = "http://www.cinebowl.co.uk/app/select.php";
    let data: Observable<any> = this.http.get(url);
    data.subscribe(result =>{ this.items = result;});
  }

filterFilms(films_id: FilmsI) {
   return !items.films_id === '1333'
 };

}
