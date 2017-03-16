import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { QuestionService } from '../../core/question/question.service';
import { ScreenComponent } from '../../shared/screen/screen.component';

@Component({
  selector: 'lb-willing-to-repeat',
  templateUrl: './willing-to-repeat.component.html',
  styleUrls: ['./willing-to-repeat.component.scss']
})
export class WillingToRepeatComponent extends ScreenComponent implements OnInit {

  constructor(
    protected questionService: QuestionService,
    protected router: Router
  ) {
    super(questionService, router);
  }
}
