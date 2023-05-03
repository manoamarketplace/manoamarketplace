import { Selector } from 'testcafe';

class EditProfilePage {
  constructor() {
    this.pageId = '#editprofile';
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

export const editprofilePage = new EditProfilePage();
