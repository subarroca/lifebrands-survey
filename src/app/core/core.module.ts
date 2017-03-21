import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageSelectorModule } from './language-selector/language-selector.module';
import { QuestionModule } from './question/question.module';
import { FlowControlModule } from './flow-control/flow-control.module';
import { AnswerModule } from './answer/answer.module';
import { StepsModule } from './steps/steps.module';
import { ColorModule } from './color/color.module';

@NgModule({
  imports: [
    CommonModule,
    LanguageSelectorModule,
    QuestionModule,
    FlowControlModule,
    AnswerModule,
    StepsModule,
    ColorModule
  ],
  exports: [
    LanguageSelectorModule,
    StepsModule
  ],
})
export class CoreModule { }
