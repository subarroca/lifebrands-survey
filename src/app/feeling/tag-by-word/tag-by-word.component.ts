import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { QuestionService } from '../../core/question/question.service';
import { ScreenComponent } from '../../shared/screen/screen.component';

@Component({
  selector: 'lb-tag-by-word',
  templateUrl: './tag-by-word.component.html',
  styleUrls: ['./tag-by-word.component.scss']
})
export class TagByWordComponent extends ScreenComponent implements OnInit {

  constructor(
    protected questionService: QuestionService,
    protected router: Router
  ) {
    super(questionService, router);
  }
}
