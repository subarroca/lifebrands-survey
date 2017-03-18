import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Http } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { environment } from '../../environments/environment';
import { TranslateModule, TranslateStaticLoader, TranslateLoader } from 'ng2-translate';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: translationLoader,
      deps: [Http]
    }),
  ],
  exports: [
    FlexLayoutModule,
    TranslateModule,]
})
export class LibrariesModule { }


export function translationLoader(http: Http) {
  return new TranslateStaticLoader(http, environment.i18nUrl, '.json');
}
