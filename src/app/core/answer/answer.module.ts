import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnswerService } from './answer.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [AnswerService]
})
export class AnswerModule { }
