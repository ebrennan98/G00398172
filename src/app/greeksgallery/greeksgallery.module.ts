import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GreeksgalleryPageRoutingModule } from './greeksgallery-routing.module';

import { GreeksgalleryPage } from './greeksgallery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GreeksgalleryPageRoutingModule
  ],
  declarations: [GreeksgalleryPage]
})
export class GreeksgalleryPageModule {}
