import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TribeRoutingModule } from './tribe-routing.module';
import { TribeComponent } from './tribe/tribe.component';
import { WillingToPayComponent } from './willing-to-pay/willing-to-pay.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TribeRoutingModule
  ],
  declarations: [TribeComponent, WillingToPayComponent]
})
export class TribeModule { }
