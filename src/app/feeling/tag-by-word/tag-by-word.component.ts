import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as _ from 'lodash';

import { QuestionService } from '../../core/question/question.service';
import { ScreenComponent } from '../../shared/screen/screen.component';
import { FlowControlService } from '../../core/flow-control/flow-control.service';
import { PhotoService } from '../../shared/photo/shared/photo.service';
import { Photo } from '../../shared/photo/shared/photo';

@Component({
  selector: 'lb-tag-by-word',
  templateUrl: './tag-by-word.component.html',
  styleUrls: ['./tag-by-word.component.scss']
})
export class TagByWordComponent extends ScreenComponent implements OnInit {
  words: string[];
  photos: Photo[];
  matches;

  selectedWord: string;
  selectedPhoto: string;

  constructor(
    protected flowControlService: FlowControlService,
    protected photoService: PhotoService
  ) {
    super(flowControlService);
  }

  ngOnInit() {
    super.ngOnInit();

    this.photos = this.photoService.wordPhotos;
    this.words = this.photoService.words;
    this.reset();
  }

  get isAllSelected() {
    return _
      .values(this.matches)
      .filter(match => match)
      .length === this.words.length;
  }

  selectWord(word: string) {
    this.selectedWord = word;
    this.match();
  }

  selectPhoto(photo: Photo) {
    this.selectedPhoto = photo.id;
    this.match();
  }

  match() {
    if (this.selectedWord && this.selectedPhoto) {
      this.matches[this.selectedWord] = this.selectedPhoto;
      this.selectedWord = undefined;
      this.selectedPhoto = undefined;

      if (this.isAllSelected) {
        this.answer(this.matches);
      }
    }
  }

  reset() {
    this.matches = {};
    this.words.forEach(word => this.matches[word] = undefined);
    this.selectedWord = undefined;
    this.selectedPhoto = undefined;
  }

  isAlreadyMatchedPhoto(photo: Photo) {
    return _
      .values(this.matches)
      .includes(photo.id);
  }

  isAlreadyMatchedWord(word: string) {
    return !!this.matches[word];
  }
}
