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
      id: 'nothing'
    }, {
      label: 'willingToPay.dinner',
      id: 'dinner'
    }, {
      label: 'willingToPay.photoCamera',
      id: 'photoCamera'
    }, {
      label: 'willingToPay.exoticTrip',
      id: 'exoticTrip'
    }, {
      label: 'willingToPay.masterPiece',
      id: 'masterPiece'
    }];


  favouritePhoto: Photo;

  constructor(
    protected flowControlService: FlowControlService,
    protected questionService: QuestionService,
    protected photoService: PhotoService,
    protected router: Router
  ) {
    super(flowControlService, questionService, router);
  }

  ngOnInit() {
    super.ngOnInit();

    this.photoService.favourite$
      .first()
      .subscribe((photo) => {
        this.favouritePhoto = photo;
      });
  }

  select(id: string) {
    this.gotoNext();
  }
}
