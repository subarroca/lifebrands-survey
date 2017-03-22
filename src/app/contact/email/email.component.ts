import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

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

  form: FormGroup = new FormGroup({
    email: new FormControl(),
    newsletter: new FormControl(true)
  });

  constructor(
    protected flowControlService: FlowControlService
  ) {
    super(flowControlService);
  }

  ngOnInit() {
    super.ngOnInit();

    this.chosenColor = this.flowControlService.calculatedColor;
  }

  answer() {
    super.answer(this.form.value);
  }
}
