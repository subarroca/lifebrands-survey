import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { QuestionService } from '../../core/question/question.service';
import { ScreenComponent } from '../../shared/screen/screen.component';
import { PhotoService } from '../../shared/photo/shared/photo.service';
import { Photo } from '../../shared/photo/shared/photo';

@Component({
  selector: 'lb-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
})
export class FavouriteComponent extends ScreenComponent implements OnInit {
  photos: Photo[];

  constructor(
    protected questionService: QuestionService,
    protected photoService: PhotoService,
    protected router: Router
  ) {
    super(questionService, router);
  }

  ngOnInit() {
    super.ngOnInit();

    this.photoService.isLoaded$
      .filter(isLoaded => isLoaded)
      .first()
      .subscribe(() => {
        this.photos = this.photoService.wordPhotos;
      });

  }

  selectPhoto(photo: Photo) {
    this.gotoNext();
  }
}
