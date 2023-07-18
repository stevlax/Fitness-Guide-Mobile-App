import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BulkingPageRoutingModule } from './bulking-routing.module';

import { BulkingPage } from './bulking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BulkingPageRoutingModule
  ],
  declarations: [BulkingPage]
})
export class BulkingPageModule {}
