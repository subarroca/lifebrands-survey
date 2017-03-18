import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Photo } from '../shared/photo';

@Component({
  selector: 'lb-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {
  @Input() photo: Photo;
  @HostBinding('class.selected') @Input() selected: boolean;
  @HostBinding('class.disabled') @Input() disabled: boolean;

  constructor() { }

  ngOnInit() {
  }

}
