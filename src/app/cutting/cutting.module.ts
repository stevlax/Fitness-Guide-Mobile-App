import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuttingPageRoutingModule } from './cutting-routing.module';

import { CuttingPage } from './cutting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuttingPageRoutingModule
  ],
  declarations: [CuttingPage]
})
export class CuttingPageModule {}
