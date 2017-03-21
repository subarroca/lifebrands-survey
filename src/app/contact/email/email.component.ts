import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { QuestionService } from '../../core/question/question.service';
import { ScreenComponent } from '../../shared/screen/screen.component';
import { FlowControlService } from '../../core/flow-control/flow-control.service';

@Component({
  selector: 'lb-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent extends ScreenComponent implements OnInit {
  chosenColor;

  constructor(
    protected flowControlService: FlowControlService
  ) {
    super(flowControlService);
  }

  ngOnInit() {
    super.ngOnInit();

    this.chosenColor = this.flowControlService.calculatedColor;
  }
}
