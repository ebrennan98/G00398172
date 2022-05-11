import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SumeriansgalleryPageRoutingModule } from './sumeriansgallery-routing.module';

import { SumeriansgalleryPage } from './sumeriansgallery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SumeriansgalleryPageRoutingModule
  ],
  declarations: [SumeriansgalleryPage]
})
export class SumeriansgalleryPageModule {}
