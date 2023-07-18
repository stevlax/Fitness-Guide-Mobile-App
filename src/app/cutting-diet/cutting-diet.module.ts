import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuttingDietPageRoutingModule } from './cutting-diet-routing.module';

import { CuttingDietPage } from './cutting-diet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuttingDietPageRoutingModule
  ],
  declarations: [CuttingDietPage]
})
export class CuttingDietPageModule {}
