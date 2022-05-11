import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EgyptiansPageRoutingModule } from './egyptians-routing.module';

import { EgyptiansPage } from './egyptians.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EgyptiansPageRoutingModule
  ],
  declarations: [EgyptiansPage]
})
export class EgyptiansPageModule {}
