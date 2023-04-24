import { Selector } from 'testcafe';

class YourlistingsPage {
  constructor() {
    this.pageId = '#yourlistings';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }
}

export const yourlistingspage = new YourlistingsPage();
