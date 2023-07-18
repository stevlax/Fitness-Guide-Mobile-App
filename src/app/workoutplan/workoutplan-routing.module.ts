import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkoutplanPage } from './workoutplan.page';

const routes: Routes = [
  {
    path: '',
    component: WorkoutplanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkoutplanPageRoutingModule {}
