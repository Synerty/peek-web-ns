import { PeekWebNsPage } from './app.po';

describe('peek-web-ns App', function() {
  let page: PeekWebNsPage;

  beforeEach(() => {
    page = new PeekWebNsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
