import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlowControlService } from './flow-control.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [FlowControlService]
})
export class FlowControlModule { }
