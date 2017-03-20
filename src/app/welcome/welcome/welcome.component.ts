import { Component, OnInit, HostListener, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

import { QuestionService } from '../../core/question/question.service';
import { ScreenComponent } from '../../shared/screen/screen.component';
import { FlowControlService } from '../../core/flow-control/flow-control.service';

@Component({
  selector: 'lb-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent extends ScreenComponent implements OnInit {
  @HostBinding('class.screen') isScreen = true;
  @HostListener('click', ['$event.target']) onClick(btn) {
    this.answer();
  }

  constructor(
    protected flowControlService: FlowControlService
  ) {
    super(flowControlService);
  }

  ngOnInit() {
  }

}
