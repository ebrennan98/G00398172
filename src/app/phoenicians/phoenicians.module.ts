import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhoeniciansPageRoutingModule } from './phoenicians-routing.module';

import { PhoeniciansPage } from './phoenicians.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhoeniciansPageRoutingModule
  ],
  declarations: [PhoeniciansPage]
})
export class PhoeniciansPageModule {}
