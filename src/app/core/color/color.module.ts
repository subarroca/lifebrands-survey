import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColorService } from './color.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [ColorService]
})
export class ColorModule { }
