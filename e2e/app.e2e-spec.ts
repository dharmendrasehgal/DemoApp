import { GSTPDPage } from './app.po';

describe('gstpd App', function() {
  let page: GSTPDPage;

  beforeEach(() => {
    page = new GSTPDPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
