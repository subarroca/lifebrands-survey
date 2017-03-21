import { Injectable } from '@angular/core';

@Injectable()
export class ColorService {
  private colors = [{
    priceTag: 'cheap',
    photoColor: 'classic',
    color: '#fff',
    colorName: 'color.white'
  }, {
    priceTag: 'expensive',
    photoColor: 'classic',
    color: '#000',
    colorName: 'color.black'
  }, {
    priceTag: 'cheap',
    photoColor: 'creative',
    color: '#06f',
    colorName: 'color.blue'
  }, {
    priceTag: 'expensive',
    photoColor: 'creative',
    color: '#939',
    colorName: 'color.violet'
  }, {
    priceTag: 'cheap',
    photoColor: 'extrovert',
    color: '#ff0',
    colorName: 'color.yellow'
  }, {
    priceTag: 'expensive',
    photoColor: 'extrovert',
    color: '#f6f',
    colorName: 'color.pink'
  }, {
    priceTag: 'cheap',
    photoColor: 'inspiring',
    color: '#06f',
    colorName: 'color.blue'
  }, {
    priceTag: 'expensive',
    photoColor: 'inspiring',
    color: '#939',
    colorName: 'color.violet'
  }];

  constructor() { }

  getColor(priceTag: string, photoColor: string) {
    const chosenColor = this.colors
      .find(color => color.priceTag === priceTag && color.photoColor === photoColor);

    return chosenColor && chosenColor;
  }

}
