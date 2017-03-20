import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, Subscription } from 'rxjs/Rx';
import { TranslateService } from 'ng2-translate';
import { environment } from '../../../environments/environment';

import { QuestionService } from '../question/question.service';
import { AnswerService } from '../answer/answer.service';


@Injectable()
export class FlowControlService {
  countdown$: Observable<number>;
  private countdown$$: Subscription;

  currentLang: string;
  questionProgress$: Observable<{ current: number, total: number }>;

  constructor(
    private router: Router,
    private translateService: TranslateService,
    private questionService: QuestionService,
    private answerService: AnswerService
  ) {
    this.reset();

    this.countdown$ = Observable.fromEvent(document, 'click')
      .do(this.countdown$$ && this.countdown$$.unsubscribe)
      .switchMap(() => Observable.timer(0, 1000)
        .take(environment.idleSecs + 1)
        .map(value => environment.idleSecs - value));

    this.countdown$$ = this.countdown$
      .filter(secs => secs === 0)
      .subscribe(() => {
        this.reset();
      });

    this.questionProgress$ = this.questionService.questionProgress$;
  }

  setLang(lang: string) {
    this.currentLang = lang;
    this.translateService.use(lang);
  }

  reset() {
    this.router.navigate(['/']);
    this.setLang(environment.mainLang);
    this.answerService.getUser();
    this.questionService.startRound();
  }

  isWelcomePage() {
    return this.router.isActive('welcome', false);
  }

  next() {
    const next = this.questionService.nextQuestion;

    if (next) {
      this.router.navigate([next.route]);
    } else {
      this.reset();
    }
  }

  answer(answer: any) {
    this.answerService.answer(answer);
  }
}
