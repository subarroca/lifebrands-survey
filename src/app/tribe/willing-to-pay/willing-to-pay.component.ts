import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { QuestionService } from '../../core/question/question.service';
import { ScreenComponent } from '../../shared/screen/screen.component';

@Component({
  selector: 'lb-willing-to-pay',
  templateUrl: './willing-to-pay.component.html',
  styleUrls: ['./willing-to-pay.component.scss']
})
export class WillingToPayComponent extends ScreenComponent implements OnInit {

  constructor(
    protected questionService: QuestionService,
    protected router: Router
  ) {
    super(questionService, router);
  }
}
