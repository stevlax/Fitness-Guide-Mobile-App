import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuttingDietPage } from './cutting-diet.page';

const routes: Routes = [
  {
    path: '',
    component: CuttingDietPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuttingDietPageRoutingModule {}
