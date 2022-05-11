import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersiansgalleryPageRoutingModule } from './persiansgallery-routing.module';

import { PersiansgalleryPage } from './persiansgallery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersiansgalleryPageRoutingModule
  ],
  declarations: [PersiansgalleryPage]
})
export class PersiansgalleryPageModule {}
