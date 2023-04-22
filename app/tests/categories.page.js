import { Selector } from 'testcafe';

class CategoriesPage {
  constructor() {
    this.pageId = '#categories-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    // This is first test to be run. Wait 10 seconds to avoid timeouts with GitHub Actions.
    await testController.wait(10000).expect(this.pageSelector.exists).ok();
  }

  async hasCards(testController) {
    const count = Selector('a').count;
    await testController.expect(count).gte(9);
  }

}

export const categoriespage = new CategoriesPage();
