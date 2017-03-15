import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'lb-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  @HostListener('click', ['$event.target']) onClick(btn) {
    console.log('next');
  }

  constructor() { }

  ngOnInit() {
  }

}
