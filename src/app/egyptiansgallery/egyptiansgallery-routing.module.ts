import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EgyptiansgalleryPage } from './egyptiansgallery.page';

const routes: Routes = [
  {
    path: '',
    component: EgyptiansgalleryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EgyptiansgalleryPageRoutingModule {}
