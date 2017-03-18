import { Component, OnInit } from '@angular/core';

import { HolderComponent } from '../../shared/holder/holder.component';

@Component({
  selector: 'lb-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent extends HolderComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
  }

}
