import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SumeriansPageRoutingModule } from './sumerians-routing.module';

import { SumeriansPage } from './sumerians.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SumeriansPageRoutingModule
  ],
  declarations: [SumeriansPage]
})
export class SumeriansPageModule {}
