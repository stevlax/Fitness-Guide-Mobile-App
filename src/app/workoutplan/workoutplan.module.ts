import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkoutplanPageRoutingModule } from './workoutplan-routing.module';

import { WorkoutplanPage } from './workoutplan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkoutplanPageRoutingModule
  ],
  declarations: [WorkoutplanPage]
})
export class WorkoutplanPageModule {}
