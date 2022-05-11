import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhoeniciansPage } from './phoenicians.page';

const routes: Routes = [
  {
    path: '',
    component: PhoeniciansPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhoeniciansPageRoutingModule {}
