import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SumeriansgalleryPage } from './sumeriansgallery.page';

const routes: Routes = [
  {
    path: '',
    component: SumeriansgalleryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SumeriansgalleryPageRoutingModule {}
