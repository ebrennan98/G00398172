import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersiansgalleryPage } from './persiansgallery.page';

const routes: Routes = [
  {
    path: '',
    component: PersiansgalleryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersiansgalleryPageRoutingModule {}
