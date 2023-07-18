import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeightlossPage } from './weightloss.page';

const routes: Routes = [
  {
    path: '',
    component: WeightlossPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeightlossPageRoutingModule {}
