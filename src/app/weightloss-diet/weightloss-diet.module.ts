import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeightlossDietPageRoutingModule } from './weightloss-diet-routing.module';

import { WeightlossDietPage } from './weightloss-diet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeightlossDietPageRoutingModule
  ],
  declarations: [WeightlossDietPage]
})
export class WeightlossDietPageModule {}
