import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CinematimesPage } from './cinematimes';

@NgModule({
  declarations: [
    CinematimesPage,
  ],
  imports: [
    IonicPageModule.forChild(CinematimesPage),
  ],
})
export class CinematimesPageModule {}
