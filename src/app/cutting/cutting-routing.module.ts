import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuttingPage } from './cutting.page';

const routes: Routes = [
  {
    path: '',
    component: CuttingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuttingPageRoutingModule {}
