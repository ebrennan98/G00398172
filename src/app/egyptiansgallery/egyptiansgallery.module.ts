import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EgyptiansgalleryPageRoutingModule } from './egyptiansgallery-routing.module';

import { EgyptiansgalleryPage } from './egyptiansgallery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EgyptiansgalleryPageRoutingModule
  ],
  declarations: [EgyptiansgalleryPage]
})
export class EgyptiansgalleryPageModule {}
