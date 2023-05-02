import { landingPage } from './landing.page';
import { signinPage } from './signin.page';
import { signoutPage } from './signout.page';
import { navBar } from './navbar.component';
import { yourlistingspage } from './yourlistings.page';
import { categoriespage } from './categories.page';
import { additempage } from './additem.page';
import { sellersPage } from './sellers.page';
import { allListings } from './listingsall.page';
import { reportedPage } from './reported.page';
import { profilePage } from './profile.page';
import { moreinfopage } from './moreinfo.page';
import { edititemPage } from './edititem.page';
import { editprofilePage } from './editprofile.page';
import { signupPage } from './signup.page';
import { addProfilePage } from './addprofile.page';

/* global fixture:false, test:false */

/** Credentials for one of the sample users defined in settings.development.json. */
const credentials = { username: 'john@hawaii.edu', password: 'changeme' };
const admin = { username: 'admin@hawaii.edu', password: 'changeme' };
const item = { name: 'Fan', image: 'https://i.insider.com/62d6e475bc4c770018b76d6c?width=1200&format=jpeg', category: 'dorm', price: '20', condition: 'used', description: 'Used for two years, still works, perfect for the hot weather' };
const profile = { firstName: 'Ren', lastName: 'Stockyer', email: 'renstto@hawaii.edu', phone: '808-333-8976',
  picture: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80', bio: 'I love surfing and paddling.' };

fixture('manoa marketplace localhost test with default db')
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
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoYourListingsPage(testController);
  await yourlistingspage.isDisplayed(testController);
});

test('Test that sellers directory page work', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoSellersDirectoryPage(testController);
  await sellersPage.isDisplayed(testController);
});

test('Test that add item page work', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoAddItemPage(testController);
  await additempage.add(testController, item.name, item.image, item.category, item.price, item.condition, item.description);
});

test('Test that categories page work', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoCategoriesPage(testController);
  await categoriespage.isDisplayed(testController);
  await categoriespage.hasCards(testController);
});

test('Test that admin all listings page work', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, admin.username, admin.password);
  await navBar.gotoAllListingsPage(testController);
  await allListings.isDisplayed(testController);
});

test('Test that admin reported item page work', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, admin.username, admin.password);
  await navBar.gotoReportedPage(testController);
  await reportedPage.isDisplayed(testController);
});

test('Test that profile page work', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, admin.username, admin.password);
  await navBar.gotoProfilePage(testController);
  await profilePage.isDisplayed(testController);
});

test('Test that more information page work', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoCategoriesPage(testController);
  await categoriespage.gotoIndividualCategory(testController);
  await moreinfopage.gotoIndividualItem(testController);
  await moreinfopage.isDisplayed(testController);
});

test('Test that edit item page work', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoYourListingsPage(testController);
  await edititemPage.gotoIndividualItem(testController);
  await edititemPage.isDisplayed(testController);
});

test('Test that edit profile page work', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, admin.username, admin.password);
  await navBar.gotoProfilePage(testController);
  await editprofilePage.gotoIndividualItem(testController);
  await editprofilePage.isDisplayed(testController);
});

test('Test that add profile and signup page work', async (testController) => {
  await navBar.gotoSignUpPage(testController);
  await signupPage.isDisplayed(testController);
  await signupPage.signupUser(testController, profile.firstName, profile.lastName, profile.email, credentials.password);
  await addProfilePage.isDisplayed(testController);
  await addProfilePage.add(testController, profile.firstName, profile.lastName, profile.email, profile.phone, profile.picture, profile.bio);
});
