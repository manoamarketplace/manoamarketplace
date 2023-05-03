import { Selector } from 'testcafe';

class AddProfilePage {
  constructor() {
    this.pageId = '#add-profile';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  async add(testController, firstName, lastName, phone, picture, bio) {
    await this.isDisplayed(testController);
    await testController.typeText('#add-profile-form-firstname', firstName);
    await testController.typeText('#add-profile-form-lastname', lastName);
    await testController.typeText('#add-profile-form-phone', phone);
    await testController.typeText('#add-profile-form-picture', picture);
    await testController.typeText('#add-profile-form-bio', bio);
    await testController.click('#add-profile-form-submit input.btn.btn-primary');
    await testController.click(Selector('.swal-button--confirm'));
  }
}

export const addProfilePage = new AddProfilePage();
