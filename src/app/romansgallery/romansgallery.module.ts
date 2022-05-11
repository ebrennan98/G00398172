import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RomansgalleryPageRoutingModule } from './romansgallery-routing.module';

import { RomansgalleryPage } from './romansgallery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RomansgalleryPageRoutingModule
  ],
  declarations: [RomansgalleryPage]
})
export class RomansgalleryPageModule {}
