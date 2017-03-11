import { Component, OnInit } from '@angular/core';

import { TranslateService } from 'ng2-translate';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'lb-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent implements OnInit {
  langs: string[];


  constructor(
    private translateService: TranslateService
  ) { }

  ngOnInit() {
    this.langs = environment.langs;
  }

  changeLang(lang: string) {
    this.translateService.use(lang);
  }

}
