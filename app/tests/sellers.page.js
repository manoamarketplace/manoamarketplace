import { Selector } from 'testcafe';

class SellersPage {
  constructor() {
    this.pageId = '#sellers';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }
}

export const sellersPage = new SellersPage();
