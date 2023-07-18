import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BulkingDietPageRoutingModule } from './bulking-diet-routing.module';

import { BulkingDietPage } from './bulking-diet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BulkingDietPageRoutingModule
  ],
  declarations: [BulkingDietPage]
})
export class BulkingDietPageModule {}
