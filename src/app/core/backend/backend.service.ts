import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Rx';

@Injectable()
export class BackendService {

  constructor(
    private http: Http
  ) { }

  save(answers: any[]) {
    // this.http.post()
    return Observable.timer(500);
  }

}
