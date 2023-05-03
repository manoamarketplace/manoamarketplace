import { Selector } from 'testcafe';

class MoreInfoPage {
  constructor() {
    this.pageId = '#moreinfo';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  async gotoIndividualItem(testController) {
    await testController.click('#item');
  }

}

export const moreinfopage = new MoreInfoPage();
