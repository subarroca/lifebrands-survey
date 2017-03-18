import { Component, OnInit } from '@angular/core';

import { HolderComponent } from '../../shared/holder/holder.component';

@Component({
  selector: 'lb-segmentation',
  templateUrl: './segmentation.component.html',
  styleUrls: ['./segmentation.component.scss']
})
export class SegmentationComponent extends HolderComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
  }

}
