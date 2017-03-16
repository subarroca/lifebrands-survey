import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedbackRoutingModule } from './feedback-routing.module';
import { FeedbackComponent } from './feedback/feedback.component';
import { WillingToRepeatComponent } from './willing-to-repeat/willing-to-repeat.component';

@NgModule({
  imports: [
    CommonModule,
    FeedbackRoutingModule
  ],
  declarations: [FeedbackComponent, WillingToRepeatComponent]
})
export class FeedbackModule { }
