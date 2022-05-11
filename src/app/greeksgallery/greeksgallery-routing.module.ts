import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GreeksgalleryPage } from './greeksgallery.page';

const routes: Routes = [
  {
    path: '',
    component: GreeksgalleryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GreeksgalleryPageRoutingModule {}
