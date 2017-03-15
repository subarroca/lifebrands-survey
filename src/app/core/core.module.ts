import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageSelectorModule } from './language-selector/language-selector.module';
import { QuestionModule } from './question/question.module';
import { FlowControlModule } from './flow-control/flow-control.module';
import { BackendModule } from './backend/backend.module';

@NgModule({
  imports: [
    CommonModule,
    LanguageSelectorModule,
    QuestionModule,
    FlowControlModule,
    BackendModule
  ],
  exports: [
    LanguageSelectorModule
  ]
})
export class CoreModule { }
