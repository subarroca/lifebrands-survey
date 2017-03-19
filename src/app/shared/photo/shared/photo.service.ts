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
    this.wordPhotos = [];
    this.words
      .forEach(word => {
        const photos = this.getPhotosByWord(word);
        this.wordPhotos.push(photos[Math.floor(Math.random() * photos.length) % photos.length]);

        // randomize order
        this.wordPhotos = this.wordPhotos
          .sort(() => Math.random());
      });
    this.favouriteSubject.next(undefined);
  }

  selectFavourite(photo: Photo) {
    console.log(photo);
    this.favouriteSubject.next(photo);
  }

}
