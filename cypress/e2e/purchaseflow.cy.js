import { login } from "../support/page-objects/merc-home-page-objects";
import { findHighestPricedItem } from "../support/page-objects/merc-home-page-objects";
describe('Sauce Demo Automated Test', () => {
  it('should navigate to saucedemo.com, login, and add the highest priced item to cart', () => {
    // Step 1: Navigate to saucedemo.com
    cy.visit('https://www.saucedemo.com');

    // Step 2: Login using username standard_user and password secret_sauce
    login('standard_user', 'secret_sauce');

    // Step 3: Select the highest priced item and add it to cart
    findHighestPricedItem().click();
  });
});
//Practise test by Aravind Chris Kv//