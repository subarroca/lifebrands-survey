import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WillingToRepeatComponent } from './willing-to-repeat/willing-to-repeat.component';
import { FeedbackComponent } from './feedback/feedback.component';

const routes: Routes = [{
  path: 'feedback',
  component: FeedbackComponent,
  children: [{
    path: 'willing-to-repeat',
    component: WillingToRepeatComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class FeedbackRoutingModule { }
