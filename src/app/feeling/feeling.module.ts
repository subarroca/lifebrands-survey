import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeelingRoutingModule } from './feeling-routing.module';
import { FeelingComponent } from './feeling/feeling.component';
import { TagByWordComponent } from './tag-by-word/tag-by-word.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FeelingRoutingModule,
    SharedModule
  ],
  declarations: [FeelingComponent, TagByWordComponent, FavouriteComponent]
})
export class FeelingModule { }
