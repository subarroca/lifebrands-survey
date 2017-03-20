import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';

import { BehaviorSubject, Observable } from 'rxjs/Rx';

import { environment } from '../../../environments/environment';

@Injectable()
export class AnswerService {
  userId: string;

  constructor(
    private http: Http
  ) { }

  getUser() {
    const params: URLSearchParams = new URLSearchParams();
    params.set('isProd', environment.production ? '1' : '0');

    this.http
      .get(this.getUrl('getuserid'), {
        search: params
      })
      .subscribe(resp => {
        this.userId = resp.json().userId;
        console.log(this.userId);
      });
  }

  answer(answer?: any) {
    if (answer) {
      this.http
        .post(this.getUrl('save'), answer);
    }
  }

  private getUrl(section: string) {
    return `${environment.apiUrl}/${section}`;
  }

}
