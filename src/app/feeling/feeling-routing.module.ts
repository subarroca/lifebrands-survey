import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeelingComponent } from './feeling/feeling.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { TagByWordComponent } from './tag-by-word/tag-by-word.component';

const routes: Routes = [{
  path: 'feeling',
  component: FeelingComponent,
  children: [{
    path: 'tag-by-word',
    component: TagByWordComponent
  }, {
    path: 'favourite',
    component: FavouriteComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class FeelingRoutingModule { }
