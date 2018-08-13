import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavParams, Tabs  } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabsadmin',
  templateUrl: 'tabsadmin.html',
})
export class TabsAdminPage {
  @ViewChild('tabsadmin') tabRef: Tabs;

  tab1RootAdmin: any = 'CinemaPage';
  tab2RootAdmin: any = 'BowlingPage';
  tab3RootAdmin: any = 'IcePage';
  tab4RootAdmin: any = 'LoyaltyPage';
  tab5RootAdmin: any = 'AdminPage';
  myIndex: number;

  constructor(navParams: NavParams) {
    // Set the active tab based on the passed index from menu.ts
    this.myIndex = navParams.data.tabIndex || 0;
  }
}
