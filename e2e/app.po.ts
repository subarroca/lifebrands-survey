import { browser, element, by } from 'protractor';

export class LinebrandsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('lb-root h1')).getText();
  }
}
