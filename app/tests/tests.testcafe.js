import { landingPage } from './landing.page';
import { signinPage } from './signin.page';
import { signoutPage } from './signout.page';
import { navBar } from './navbar.component';
import { yourlistingspage } from './yourlistings.page';
import { categoriespage } from './categories.page';
import { additempage } from './additem.page';

/* global fixture:false, test:false */

/** Credentials for one of the sample users defined in settings.development.json. */
const credentials = { username: 'john@foo.com', password: 'changeme' };
const item = { name: 'Fan', image: 'https://i.insider.com/62d6e475bc4c770018b76d6c?width=1200&format=jpeg', category: 'dorm', price: '20', condition: 'used', description: 'Used for two years, still works, perfect for the hot weather' };

fixture('meteor-application-template-react localhost test with default db')
  .page('http://localhost:3000');

test('Test that landing page shows up', async (testController) => {
  await landingPage.isDisplayed(testController);
});

test('Test that signin and signout work', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.isLoggedIn(testController, credentials.username);
  await navBar.logout(testController);
  await signoutPage.isDisplayed(testController);
});

test('Test that your listings page work', async (testController) => {
  await navBar.gotoYourListingsPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await yourlistingspage.isDisplayed(testController);
});

test('Test that add item page work', async (testController) => {
  await navBar.gotoAddItemPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await additempage.add(testController, item.name, item.price, item.condition, item.category, item.description, item.image);
});

test('Test that categories page work', async (testController) => {
  await navBar.gotoCategoriesPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await categoriespage.isDisplayed(testController);
  await categoriespage.hasCards(testController);
});
