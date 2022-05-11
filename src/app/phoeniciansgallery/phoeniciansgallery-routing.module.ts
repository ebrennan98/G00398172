import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhoeniciansgalleryPage } from './phoeniciansgallery.page';

const routes: Routes = [
  {
    path: '',
    component: PhoeniciansgalleryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhoeniciansgalleryPageRoutingModule {}
