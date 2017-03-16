import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Http } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { environment } from '../../environments/environment';
import { TranslateModule, TranslateStaticLoader, TranslateLoader } from 'ng2-translate';

import { CountdownTimerModule } from './countdown-timer/countdown-timer.module';


@NgModule({
  imports: [
    CommonModule,
    CountdownTimerModule,
    FlexLayoutModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: translationLoader,
      deps: [Http]
    })
  ],
  exports: [
    CountdownTimerModule,
    FlexLayoutModule,
    TranslateModule
  ]
})
export class SharedModule { }


export function translationLoader(http: Http) {
  return new TranslateStaticLoader(http, environment.i18nUrl, '.json');
}