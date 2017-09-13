import { KinectraCodeTestPage } from './app.po';

describe('kinectra-code-test App', () => {
  let page: KinectraCodeTestPage;

  beforeEach(() => {
    page = new KinectraCodeTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
