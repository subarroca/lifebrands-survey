import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeelingRoutingModule } from './feeling-routing.module';
import { FeelingComponent } from './feeling/feeling.component';
import { TagByWordComponent } from './tag-by-word/tag-by-word.component';
import { FavouriteComponent } from './favourite/favourite.component';

@NgModule({
  imports: [
    CommonModule,
    FeelingRoutingModule
  ],
  declarations: [FeelingComponent, TagByWordComponent, FavouriteComponent]
})
export class FeelingModule { }
