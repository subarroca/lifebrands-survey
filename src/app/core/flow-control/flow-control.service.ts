import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, Subscription } from 'rxjs/Rx';
import { TranslateService } from 'ng2-translate';
import { environment } from '../../../environments/environment';

import { QuestionService } from '../question/question.service';
import { Question } from '../question/question';
import { AnswerService } from '../answer/answer.service';
import { PhotoService } from '../../shared/photo/shared/photo.service';
import { Photo } from '../../shared/photo/shared/photo';
import { ColorService } from '../color/color.service';


@Injectable()
export class FlowControlService {
  countdown$: Observable<number>;
  private countdown$$: Subscription;

  currentLang: string;
  questionProgress$: Observable<{ current: number, total: number }>;
  currentQuestion: Question;

  priceTag: string;
  private favouritePhoto: Photo;

  constructor(
    private router: Router,
    private translateService: TranslateService,
    private questionService: QuestionService,
    private answerService: AnswerService,
    private photoService: PhotoService,
    private colorService: ColorService
  ) {

    this.photoService.isLoaded$
      .filter(isLoaded => isLoaded)
      .first()
      .subscribe(() => {
        this.reset();
      });

    this.countdown$ = Observable.merge(
      Observable.fromEvent(document, 'click'),
      Observable.fromEvent(document, 'keyup')
    )
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
    this.answerService.answer('lang', lang);
  }

  reset() {
    this.router.navigate(['/']);
    this.setLang(environment.mainLang);
    this.photoService.reset();
    this.answerService.getUser();
    this.questionService.startRound();
  }

  isWelcomePage() {
    return this.router.isActive('welcome', false);
  }

  next() {
    this.currentQuestion = this.questionService.nextQuestion;

    if (this.currentQuestion) {
      this.router.navigate([this.currentQuestion.route]);
    } else {
      this.reset();
    }
  }

  answer(answer: any) {
    if (answer && this.currentQuestion) {
      this.answerService.answer(this.currentQuestion.id, answer);
    }
  }

  get calculatedColor() {
    return this.colorService.getColor(this.priceTag, this.favouritePhoto.word);
  }

  set favourite(photo: Photo) {
    this.favouritePhoto = photo;
    this.photoService.selectFavourite(photo);
  }
}
