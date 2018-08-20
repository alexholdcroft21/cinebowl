import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IcePage } from './ice';

@NgModule({
  declarations: [
    IcePage,
  ],
  imports: [
    IonicPageModule.forChild(IcePage),
  ],
})
export class IcePageModule {}
