import { Selector } from 'testcafe';

class ReportedPage {
  constructor() {
    this.pageId = '#reported';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }
}

export const reportedPage = new ReportedPage();
