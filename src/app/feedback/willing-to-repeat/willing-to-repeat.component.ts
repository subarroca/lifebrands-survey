import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { QuestionService } from '../../core/question/question.service';
import { ScreenComponent } from '../../shared/screen/screen.component';
import { FlowControlService } from '../../core/flow-control/flow-control.service';

@Component({
  selector: 'lb-willing-to-repeat',
  templateUrl: './willing-to-repeat.component.html',
  styleUrls: ['./willing-to-repeat.component.scss']
})
export class WillingToRepeatComponent extends ScreenComponent implements OnInit {
  answers = [
    {
      label: 'willingToRepeat.theseDays',
      id: 'theseDays'
    }, {
      label: 'willingToRepeat.nextMarket',
      id: 'nextMarket'
    }, {
      label: 'willingToRepeat.dunno',
      id: 'dunno'
    }];


  constructor(
    protected flowControlService: FlowControlService
  ) {
    super(flowControlService);
  }

  select(id: string) {
    this.answer(id);
  }
}
