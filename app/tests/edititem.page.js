import { Selector } from 'testcafe';

class EdititemPage {
  constructor() {
    this.pageId = '#edititem';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  async gotoIndividualItem(testController) {
    await testController.click('#edit');
  }
}

export const edititemPage = new EdititemPage();
