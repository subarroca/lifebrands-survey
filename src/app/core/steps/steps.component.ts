import { Component, OnInit } from '@angular/core';

import { FlowControlService } from '../../core/flow-control/flow-control.service';

@Component({
  selector: 'lb-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent implements OnInit {
  progress: number;

  constructor(
    private flowControlService: FlowControlService
  ) { }

  ngOnInit() {
    this.flowControlService.questionProgress$
      .subscribe(progress => this.progress = 100 * progress.current / progress.total);
  }

}
