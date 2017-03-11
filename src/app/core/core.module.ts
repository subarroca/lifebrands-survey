import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageSelectorModule } from './language-selector/language-selector.module';
import { QuestionModule } from './question/question.module';
import { FlowControlModule } from './flow-control/flow-control.module';

@NgModule({
  imports: [
    CommonModule,
    LanguageSelectorModule,
    QuestionModule,
    FlowControlModule
  ],
  exports: [
    LanguageSelectorModule,
    QuestionModule,
    FlowControlModule
  ]
})
export class CoreModule { }
