import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeightlossPageRoutingModule } from './weightloss-routing.module';

import { WeightlossPage } from './weightloss.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeightlossPageRoutingModule
  ],
  declarations: [WeightlossPage]
})
export class WeightlossPageModule {}
