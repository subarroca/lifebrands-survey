import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoService } from './shared/photo.service';
import { PhotoComponent } from './photo/photo.component';
import { LibrariesModule } from '../libraries.module';

@NgModule({
  imports: [
    CommonModule,
    LibrariesModule
  ],
  declarations: [PhotoComponent],
  exports: [PhotoComponent],
  providers: [PhotoService]
})
export class PhotoModule { }
