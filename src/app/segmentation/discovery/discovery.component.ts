import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { QuestionService } from '../../core/question/question.service';
import { ScreenComponent } from '../../shared/screen/screen.component';

@Component({
  selector: 'lb-discovery',
  templateUrl: './discovery.component.html',
  styleUrls: ['./discovery.component.scss']
})
export class DiscoveryComponent extends ScreenComponent implements OnInit {

  constructor(
    protected questionService: QuestionService,
    protected router: Router
  ) {
    super(questionService, router);
  }
}
