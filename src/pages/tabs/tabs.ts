import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root: any = 'CinemaPage';
  tab2Root: any = 'BowlingPage';
  tab3Root: any = 'IcePage';
  tab4Root: any = 'LoyaltyPage';
  tab5Root: any = 'LoginPage';
  tab6Root: any = 'RegisterPage';
  myIndex: number;

  constructor(navParams: NavParams) {
    // Set the active tab based on the passed index from menu.ts
    this.myIndex = navParams.data.tabIndex || 0;
  }
}
