import { Component, OnInit } from '@angular/core';

import { HolderComponent } from '../../shared/holder/holder.component';

@Component({
  selector: 'lb-feeling',
  templateUrl: './feeling.component.html',
  styleUrls: ['./feeling.component.scss']
})
export class FeelingComponent extends HolderComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
  }

}
