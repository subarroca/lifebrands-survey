import { Component, OnInit } from '@angular/core';

import { HolderComponent } from '../../shared/holder/holder.component';

@Component({
  selector: 'lb-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent extends HolderComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
  }

}
