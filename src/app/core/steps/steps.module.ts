import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepsComponent } from './steps.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StepsComponent],
  exports: [StepsComponent]
})
export class StepsModule { }
