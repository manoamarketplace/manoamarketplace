import { Selector } from 'testcafe';

class AdditemPage {
  constructor() {
    this.pageId = '#additem';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  async add(testController, name, image, category, price, condition, description) {
    await this.isDisplayed(testController);
    await testController.typeText('#add-form-name', name);
    await testController.typeText('#add-form-image', image);
    await testController.typeText('#add-form-category', category);
    await testController.typeText('#add-form-price', price);
    await testController.typeText('#add-form-condition', condition);
    await testController.typeText('#add-form-description', description);
    await testController.click('#add-form-submit input.btn.btn-primary');
    await testController.click(Selector('.swal-button--confirm'));
  }
}

export const additempage = new AdditemPage();
