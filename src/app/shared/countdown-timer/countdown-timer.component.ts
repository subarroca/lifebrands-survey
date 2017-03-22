import { Component, OnInit, Input } from '@angular/core';

import { Observable, Subscription } from 'rxjs/Rx';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'lb-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss']
})
export class CountdownTimerComponent implements OnInit {
  @Input() countdown: Observable<number>;


  constructor() { }

  ngOnInit() {
  }

  isVisible(secs: number) {
    return secs && secs <= environment.idleSecsWarning;
  }

}
