import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WillingToPayComponent } from './willing-to-pay/willing-to-pay.component';
import { TribeComponent } from './tribe/tribe.component';


const routes: Routes = [{
  path: 'tribe',
  component: TribeComponent,
  children: [{
    path: 'willing-to-pay',
    component: WillingToPayComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class TribeRoutingModule { }
