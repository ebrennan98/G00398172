import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersiansPageRoutingModule } from './persians-routing.module';

import { PersiansPage } from './persians.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersiansPageRoutingModule
  ],
  declarations: [PersiansPage]
})
export class PersiansPageModule {}
