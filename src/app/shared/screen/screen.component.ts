import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { QuestionService } from '../../core/question/question.service';

export class ScreenComponent implements OnInit {

  constructor(
    protected questionService: QuestionService,
    protected router: Router
  ) { }

  ngOnInit() {
  }


  gotoNext() {
    const next = this.questionService.nextQuestion;
    console.log(next);

    this.router.navigate([next.route]);
  }
}
