import { Selector } from 'testcafe';
import { navBar } from './navbar.component';

class SignupPage {
  constructor() {
    this.pageId = '#signup-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  /** Signs up a new user, then checks to see that they are logged in by checking the navbar. */
  async signupUser(testController, email, password) {
    await this.isDisplayed(testController);
    await testController.typeText('#email', email);
    await testController.typeText('#password', password);
    await testController.click('#signup-form-submit input.btn.btn-primary');
    await navBar.isLoggedIn(testController, email);
  }
}

export const signupPage = new SignupPage();
