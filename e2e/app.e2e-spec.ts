import { SrcPage } from './app.po';

describe('src App', () => {
  let page: SrcPage;

  beforeEach(() => {
    page = new SrcPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
