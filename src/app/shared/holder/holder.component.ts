import { OnInit, HostBinding } from '@angular/core';

export class HolderComponent implements OnInit {
  @HostBinding('class.holder') holderClass = true;

  constructor() { }

  ngOnInit() {
  }

}
