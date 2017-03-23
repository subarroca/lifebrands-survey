import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { BehaviorSubject, Observable } from 'rxjs/Rx';

import { environment } from '../../../environments/environment';

@Injectable()
export class AnswerService {
  userId: string;

  answerNums = {
    'lang': 1,
    'segmentation-discovery': 2,
    'tribe-willingToPay': 3,
    'feeling-tagByWord': 4,
    'feeling-favourite': 5,
    'contact-email': 6,
    'feedback-willingToRepeat': 8,
  };

  constructor(
    private http: Http
  ) { }

  getUser() {
    this.http
      .post(this.getUrl('getuserid'), {
        isProd: environment.production
      })
      .subscribe(resp => {
        this.userId = resp.json().userId;
      });
  }

  answer(questionId: string, answer?: any) {
    if (answer) {
      this.http
        .post(this.getUrl('save'), {
          id: this.userId,
          answerNum: this.answerNums[questionId],
          answerValue: JSON.stringify(answer)
        })
        .subscribe(resp => true);
    }
  }

  private getUrl(section: string) {
    return `${environment.apiUrl}/${section}`;
  }

}
