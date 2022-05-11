import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersiansPage } from './persians.page';

const routes: Routes = [
  {
    path: '',
    component: PersiansPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersiansPageRoutingModule {}
