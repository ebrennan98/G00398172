import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GreeksPage } from './greeks.page';

const routes: Routes = [
  {
    path: '',
    component: GreeksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GreeksPageRoutingModule {}
