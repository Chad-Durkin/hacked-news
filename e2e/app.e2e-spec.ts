import { HackedNewsPage } from './app.po';

describe('hacked-news App', function() {
  let page: HackedNewsPage;

  beforeEach(() => {
    page = new HackedNewsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
