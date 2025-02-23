const request = require("supertest");
const app = require("../src/server");

describe("REST API Products", () => {
  it("it should get the list of products", async () => {
    const response = await request(app).get("/products");
    expect(response.statusCode).toEqual(200);
    expect(Array.isArray(response.body)).toBeTruthy();
  });

  it("it should create a new product", async () => {
    const product = {
      name: "Producto de Prueba",
      description: "Descripción de prueba",
      price: 99.99,
      quantity: 10,
    };

    const response = await request(app).post("/products").send(product);
    expect(response.statusCode).toEqual(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body.name).toEqual(product.name);
  });

  it("it should delete a product", async () => {
    const product = {
      name: "Producto a Eliminar",
      description: "Descripción de prueba",
      price: 50.0,
      quantity: 5,
    };

    const createResponse = await request(app).post("/products").send(product);
    const productId = createResponse.body.id;

    const deleteResponse = await request(app).delete(`/products/${productId}`);
    expect(deleteResponse.statusCode).toEqual(204);
  });

  it("it should create an buyer event", async () => {
    const event = {
      buyerId: 1,
      eventType: "purchase",
    };

    const response = await request(app).post("/events").send(event);
    expect(response.statusCode).toEqual(201);
  });
});
