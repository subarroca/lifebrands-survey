import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CountdownTimerModule } from './countdown-timer/countdown-timer.module';
import { PhotoModule } from './photo/photo.module';
import { LibrariesModule } from './libraries.module';


@NgModule({
  imports: [
    CommonModule,
    PhotoModule,
    CountdownTimerModule,
    LibrariesModule,
    ReactiveFormsModule
  ],
  exports: [
    PhotoModule,
    CountdownTimerModule,
    LibrariesModule,
    ReactiveFormsModule
  ],
})
export class SharedModule { }
