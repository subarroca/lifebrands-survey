import { Component, OnInit } from '@angular/core';

import { HolderComponent } from '../../shared/holder/holder.component';

@Component({
  selector: 'lb-tribe',
  templateUrl: './tribe.component.html',
  styleUrls: ['./tribe.component.scss']
})
export class TribeComponent extends HolderComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
  }

}
