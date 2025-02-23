import React from 'react'
import ListProductsComponent from './ListProductsComponent'

describe('<ListProductsComponent />', () => {
  it('renders', () => {
    cy.intercept("GET", "/products", {
      statusCode: 200,
      body: [
        {
          id: 1,
          name: "Electronic Plastic Tuna",
          description: "Descripción 1",
          price: 10.99,
          quantity: 5,
        },
        {
          id: 2,
          name: "Ergonomic Metal Sausages",
          description: "Descripción 2",
          price: 20.99,
          quantity: 10,
        },
      ],
    });
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ListProductsComponent />)
  })
})