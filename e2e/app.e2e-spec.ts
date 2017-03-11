import { LinebrandsPage } from './app.po';

describe('linebrands App', () => {
  let page: LinebrandsPage;

  beforeEach(() => {
    page = new LinebrandsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('lb works!');
  });
});
