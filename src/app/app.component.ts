import { Component, OnInit } from '@angular/core';

import { TranslateService } from 'ng2-translate';
import { Observable } from 'rxjs/Rx';
import { environment } from '../environments/environment';

import { FlowControlService } from './core/flow-control/flow-control.service';
import { QuestionService } from './core/question/question.service';

@Component({
  selector: 'lb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  idleCountdown$: Observable<number> = this.flowControlService.countdown$;

  constructor(
    private flowControlService: FlowControlService,
    private questionService: QuestionService,
    private translateService: TranslateService
  ) { }

  ngOnInit() {
    this.questionService.isLoaded$
      .filter(isLoaded => isLoaded)
      .first()
      .subscribe(() => this.questionService.nextQuestion);


    this.translateService.setDefaultLang(environment.langs[0]);
  }
}
