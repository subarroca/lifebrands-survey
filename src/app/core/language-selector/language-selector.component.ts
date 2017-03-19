import { Component, OnInit } from '@angular/core';

import { TranslateService } from 'ng2-translate';

import { FlowControlService } from '../../core/flow-control/flow-control.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'lb-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent implements OnInit {
  langs: string[];
  selectedLang: string;


  constructor(
    private translateService: TranslateService,
    private flowControlService: FlowControlService
  ) { }

  ngOnInit() {
    this.langs = environment.langs;
    this.selectedLang = environment.mainLang;
  }

  changeLang(lang: string) {
    this.flowControlService.setLang(lang);
  }

  isCurrentLang(lang: string) {
    return this.flowControlService.currentLang === lang;
  }

}
