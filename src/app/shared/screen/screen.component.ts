import { OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

import { QuestionService } from '../../core/question/question.service';
import { FlowControlService } from '../../core/flow-control/flow-control.service';

export class ScreenComponent implements OnInit {
  @HostBinding('class.screen') screenClass = true;

  constructor(
    protected flowControlService: FlowControlService,
    protected questionService: QuestionService,
    protected router: Router
  ) { }

  ngOnInit() {
  }


  gotoNext() {
    const next = this.questionService.nextQuestion;

    if (next) {
      this.router.navigate([next.route]);
    } else {
      this.flowControlService.reset();
    }
  }
}
