import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RomansgalleryPage } from './romansgallery.page';

const routes: Routes = [
  {
    path: '',
    component: RomansgalleryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RomansgalleryPageRoutingModule {}
