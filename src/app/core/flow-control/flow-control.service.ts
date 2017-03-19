import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, Subscription } from 'rxjs/Rx';
import { TranslateService } from 'ng2-translate';
import { environment } from '../../../environments/environment';

import { BackendService } from '../backend/backend.service';
import { QuestionService } from '../question/question.service';


@Injectable()
export class FlowControlService {
  countdown$: Observable<number>;
  private countdown$$: Subscription;

  currentLang: string;

  constructor(
    private router: Router,
    private translateService: TranslateService,
    private backendService: BackendService,
    private questionService: QuestionService
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
  }

  setLang(lang: string) {
    this.currentLang = lang;
    this.translateService.use(lang);
  }

  reset() {
    this.router.navigate(['/']);
    this.setLang(environment.mainLang);
    this.backendService.save(this.questionService.answers);
    this.questionService.startRound();
  }

  isWelcomePage() {
    return this.router.isActive('welcome', false);
  }
}
