import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeightlossDietPage } from './weightloss-diet.page';

const routes: Routes = [
  {
    path: '',
    component: WeightlossDietPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeightlossDietPageRoutingModule {}
