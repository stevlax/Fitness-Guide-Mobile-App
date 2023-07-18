import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BulkingDietPage } from './bulking-diet.page';

const routes: Routes = [
  {
    path: '',
    component: BulkingDietPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BulkingDietPageRoutingModule {}
