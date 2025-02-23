const APP_PORT = 3000;

describe("e2e test for buyers list", () => {
  it("it should be load a list of buyers", () => {
    cy.intercept("GET", "/buyers", {
      statusCode: 200,
      body: [
        {
          id: 1,
          name: "Craig",
          lastname: "Heller",
          typeId: "DNI",
          created_at: new Date(),
        },
        {
          id: 2,
          name: "Joshua",
          lastname: "Reichel",
          typeId: "PASSPORT",
          created_at: new Date(),
        },
      ],
    });

    cy.visit(`http://localhost:${APP_PORT}`);
    cy.contains("Lista de Compradores").should("exist");
    cy.contains("Craig").should("exist");
    cy.contains("Heller").should("exist");
    cy.contains("Joshua").should("exist");
    cy.contains("Reichel").should("exist");
  });

  it("it should show a message if there are no buyers", () => {
    cy.intercept("GET", "/buyers", {
      statusCode: 200,
      body: [],
    });

    cy.visit(`http://localhost:${APP_PORT}`);
    cy.contains("No hay compradores").should("exist");
  });
});

describe("e2e test for products list", () => {
  it("it should be load a list of products", () => {
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

    cy.visit(`http://localhost:${APP_PORT}`);
    cy.contains("Lista de Productos").should("exist");
    cy.contains("Electronic Plastic Tuna").should("exist");
    cy.contains("Ergonomic Metal Sausages").should("exist");
  });

  it("it should show a message if there are no products", () => {
    cy.intercept("GET", "/products", {
      statusCode: 200,
      body: [],
    });

    cy.visit(`http://localhost:${APP_PORT}`);
    cy.contains("No hay productos").should("exist");
  });
});
