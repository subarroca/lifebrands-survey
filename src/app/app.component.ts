import { Component, OnInit, HostBinding } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { TranslateService } from 'ng2-translate';
import { Observable } from 'rxjs/Rx';
import { environment } from '../environments/environment';

import { FlowControlService } from './core/flow-control/flow-control.service';
import { QuestionService } from './core/question/question.service';
import { PhotoService } from './shared/photo/shared/photo.service';

@Component({
  selector: 'lb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @HostBinding('attr.style') style;

  idleCountdown$: Observable<number> = this.flowControlService.countdown$;

  constructor(
    private flowControlService: FlowControlService,
    private questionService: QuestionService,
    private photoService: PhotoService,
    private translateService: TranslateService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.questionService.isLoaded$
      .filter(isLoaded => isLoaded)
      .first()
      .subscribe(() => true);

    this.translateService.setDefaultLang(environment.mainLang);

    Observable.combineLatest(
      this.photoService.favourite$,
      this.questionService.currentQuestion$
    )
      .subscribe(([photo, question]) =>
        this.style = this.sanitizer
          .bypassSecurityTrustStyle(`background: ${(photo && question && question.paintBackground) ?
            photo.color : 'transparent'}`));
  }

  reset() {
    this.flowControlService.reset();
  }

  get shouldHideStartButton() {
    return this.flowControlService.isWelcomePage();
  }
}
