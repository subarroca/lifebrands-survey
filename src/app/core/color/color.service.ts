import { Injectable } from '@angular/core';

@Injectable()
export class ColorService {
  private colors = [{
    priceTag: 'cheap',
    photoColor: 'classic',
    colorClass: 'white',
    colorName: 'color.white'
  }, {
    priceTag: 'expensive',
    photoColor: 'classic',
    colorClass: 'black',
    colorName: 'color.black'
  }, {
    priceTag: 'cheap',
    photoColor: 'creative',
    colorClass: 'blue',
    colorName: 'color.blue'
  }, {
    priceTag: 'expensive',
    photoColor: 'creative',
    colorClass: 'purple',
    colorName: 'color.purple'
  }, {
    priceTag: 'cheap',
    photoColor: 'extrovert',
    colorClass: 'yellow',
    colorName: 'color.yellow'
  }, {
    priceTag: 'expensive',
    photoColor: 'extrovert',
    colorClass: 'pink',
    colorName: 'color.pink'
  }, {
    priceTag: 'cheap',
    photoColor: 'inspiring',
    colorClass: 'blue',
    colorName: 'color.blue'
  }, {
    priceTag: 'expensive',
    photoColor: 'inspiring',
    colorClass: 'purple',
    colorName: 'color.purple'
  }];

  constructor() { }

  getColor(priceTag: string, photoColor: string) {
    const chosenColor = this.colors
      .find(color => color.priceTag === priceTag && color.photoColor === photoColor);

    return chosenColor && chosenColor;
  }

}
