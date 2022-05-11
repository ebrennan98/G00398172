import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GreeksPageRoutingModule } from './greeks-routing.module';

import { GreeksPage } from './greeks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GreeksPageRoutingModule
  ],
  declarations: [GreeksPage]
})
export class GreeksPageModule {}
