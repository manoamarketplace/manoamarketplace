import { Selector } from 'testcafe';

class AllListings {
  constructor() {
    this.pageId = '#all-listings';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }
}

export const allListings = new AllListings();
