import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { QuestionService } from '../../core/question/question.service';
import { ScreenComponent } from '../../shared/screen/screen.component';
import { PhotoService } from '../../shared/photo/shared/photo.service';
import { FlowControlService } from '../../core/flow-control/flow-control.service';
import { Photo } from '../../shared/photo/shared/photo';

@Component({
  selector: 'lb-willing-to-pay',
  templateUrl: './willing-to-pay.component.html',
  styleUrls: ['./willing-to-pay.component.scss']
})
export class WillingToPayComponent extends ScreenComponent implements OnInit {
  answers = [
    {
      label: 'willingToPay.nothing',
      id: 'nothing',
      priceTag: 'cheap',
    }, {
      label: 'willingToPay.dinner',
      id: 'dinner',
      priceTag: 'cheap',
    }, {
      label: 'willingToPay.photoCamera',
      id: 'photoCamera',
      priceTag: 'cheap',
    }, {
      label: 'willingToPay.exoticTrip',
      id: 'exoticTrip',
      priceTag: 'expensive',
    }, {
      label: 'willingToPay.masterPiece',
      id: 'masterPiece',
      priceTag: 'expensive',
    }];


  favouritePhoto: Photo;

  constructor(
    protected flowControlService: FlowControlService,
    protected photoService: PhotoService
  ) {
    super(flowControlService);
  }

  ngOnInit() {
    super.ngOnInit();

    this.photoService.favourite$
      .first()
      .subscribe((photo) => {
        this.favouritePhoto = photo;
      });
  }

  select(answer) {
    this.flowControlService.priceTag = answer.priceTag;
    this.answer(answer.id);
  }
}
