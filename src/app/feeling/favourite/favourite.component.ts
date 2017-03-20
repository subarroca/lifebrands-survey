import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { QuestionService } from '../../core/question/question.service';
import { ScreenComponent } from '../../shared/screen/screen.component';
import { FlowControlService } from '../../core/flow-control/flow-control.service';
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
    protected flowControlService: FlowControlService,
    protected photoService: PhotoService
  ) {
    super(flowControlService);
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
    this.photoService.selectFavourite(photo);
    this.answer(photo.id);
  }
}
