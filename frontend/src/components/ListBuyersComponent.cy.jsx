import React from 'react'
import ListBuyersComponent from './ListBuyersComponent'

describe('<ListBuyersComponent />', () => {
  it('renders', () => {
    cy.intercept("GET", "/buyers", {
      statusCode: 200,
      body: [
        {
          id: 1,
          name: "Adaline Plastic Tuna",
          lastname: "Kuhic",
          type_id: "DNI",
          created_at: new Date(),
        },
        {
          id: 2,
          name: "Lonnie",
          lastname: "Grimes",
          type_id: "PASSPORT",
          created_at: new Date(),
        },
      ],
    });
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ListBuyersComponent />)
  })
})