import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CinematimesPage } from './cinematimes';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    CinematimesPage,
  ],
  imports: [
    IonicPageModule.forChild(CinematimesPage),
        PipesModule.forRoot()
  ],
})
export class CinematimesPageModule {}
