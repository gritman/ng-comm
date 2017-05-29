import { NgCommPage } from './app.po';

describe('ng-comm App', () => {
  let page: NgCommPage;

  beforeEach(() => {
    page = new NgCommPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
