import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SumeriansPage } from './sumerians.page';

const routes: Routes = [
  {
    path: '',
    component: SumeriansPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SumeriansPageRoutingModule {}
