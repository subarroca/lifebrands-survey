import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { BehaviorSubject, Observable } from 'rxjs/Rx';

import { environment } from '../../../../environments/environment';
import { Photo } from './photo';

@Injectable()
export class PhotoService {
  photos: Photo[];
  wordPhotos: Photo[];

  private isLoadedSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isLoaded$: Observable<boolean> = this.isLoadedSubject.asObservable();

  private favouriteSubject: BehaviorSubject<Photo> = new BehaviorSubject(undefined);
  favourite$: Observable<Photo> = this.favouriteSubject.asObservable();

  constructor(
    private http: Http
  ) {
    this.isLoadedSubject.next(false);

    this.http
      .get(environment.photosUrl)
      .first()
      .subscribe(resp => {
        this.photos = resp.json().map(photo => new Photo(photo));

        this.isLoadedSubject.next(true);
      });
  }

  get words() {
    return Array.from(
      (new Set(this.photos
        .map(photo => photo.word)))
        .values());
  }

  private getPhotosByWord(word: string) {
    return this.photos
      .filter(photo => photo.word === word);
  }

  reset() {
    // set an empty array to randomize later
    this.wordPhotos = this.words.map(() => undefined);
    const wordPhotos = [];
    this.words
      .forEach(word => {
        const photos = this.getPhotosByWord(word);
        wordPhotos.push(photos[Math.floor(Math.random() * photos.length) % photos.length]);
      });

    // randomize order
    const order = this.words
      .map((value, i) => { return { i: i, val: Math.random() }; })
      .sort((a, b) => a.val > b.val ? 1 : -1);

    order.map((val, i) => this.wordPhotos[val.i] = wordPhotos[i]);

    this.favouriteSubject.next(undefined);
  }

  selectFavourite(photo: Photo) {
    console.log(photo);
    this.favouriteSubject.next(photo);
  }

}
