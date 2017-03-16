import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TribeRoutingModule } from './tribe-routing.module';
import { TribeComponent } from './tribe/tribe.component';
import { WillingToPayComponent } from './willing-to-pay/willing-to-pay.component';

@NgModule({
  imports: [
    CommonModule,
    TribeRoutingModule
  ],
  declarations: [TribeComponent, WillingToPayComponent]
})
export class TribeModule { }
