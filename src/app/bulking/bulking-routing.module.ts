import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BulkingPage } from './bulking.page';

const routes: Routes = [
  {
    path: '',
    component: BulkingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BulkingPageRoutingModule {}
