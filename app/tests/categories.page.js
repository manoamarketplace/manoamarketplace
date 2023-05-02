import { Selector } from 'testcafe';

class CategoriesPage {
  constructor() {
    this.pageId = '#categories';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  async hasCards(testController) {
    const count = Selector('a').count;
    await testController.expect(count).gte(9);
  }

  async gotoIndividualCategory(testController) {
    await testController.click('#individual-category');
  }
}

export const categoriespage = new CategoriesPage();
