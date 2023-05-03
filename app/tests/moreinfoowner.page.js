import { Selector } from 'testcafe';

class MoreInfoOwnerPage {
  constructor() {
    this.pageId = '#more-info-owner';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  async gotoIndividualItem(testController) {
    await testController.click('#itemowner');
  }

}

export const moreinfoownerpage = new MoreInfoOwnerPage();
