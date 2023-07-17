export const login = (username, password) => {
    cy.get('#user-name').type(username);
    cy.get('#password').type(password);
    cy.get('#login-button').click();
  };
export const findHighestPricedItem = () => {
    return cy.get('.inventory_item_price').then((prices) => {
      // Extract the prices as numbers
      const itemPrices = prices.toArray().map((price) => {
        return parseFloat(price.innerText.replace('$', ''));
      });

      // Find the highest priced item
      const maxPrice = Math.max(...itemPrices);
      const highestPricedItemIndex = itemPrices.findIndex((price) => price === maxPrice);

      return cy.get('.btn_inventory').eq(highestPricedItemIndex);
    });
  };
export const findLowestPricedItem = () => {
    return cy.get('.inventory_item_price').then((prices) => {
      // Extract the prices as numbers
      const itemPrices = prices.toArray().map((price) => {
        return parseFloat(price.innerText.replace('$', ''));
      });

      // Find the lowest priced item
      const minPrice = Math.min(...itemPrices);
      const lowestPricedItemIndex = itemPrices.findIndex((price) => price === minPrice);

      return cy.get('.btn_inventory').eq(lowestPricedItemIndex);
    });
  };
  // by Aravind Chris Kv//