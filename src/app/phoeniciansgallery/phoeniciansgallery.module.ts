import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhoeniciansgalleryPageRoutingModule } from './phoeniciansgallery-routing.module';

import { PhoeniciansgalleryPage } from './phoeniciansgallery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhoeniciansgalleryPageRoutingModule
  ],
  declarations: [PhoeniciansgalleryPage]
})
export class PhoeniciansgalleryPageModule {}
