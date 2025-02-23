const { faker } = require("@faker-js/faker");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

/**
 * Main function
 */
async function main() {
  for (let i = 0; i < 100; i++) {
    await prisma.products.create({
      data: {
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: parseFloat(faker.commerce.price()),
        quantity: Math.floor(Math.random() * 1000),
        created_at: new Date(),
      },
    });
  }

  function getRandomTypeId() {
    const types = ["DNI", "PASSPORT", "LICENCE", "N/A"];
    const randomIndex = Math.floor(Math.random() * types.length);
    return types[randomIndex];
  }

  for (let i = 0; i < 100; i++) {
    await prisma.buyers.create({
      data: {
        name: faker.person.firstName(),
        lastname: faker.person.lastName(),
        type_id: getRandomTypeId(),
        events: {
          create: [
            { event_type: "data_query" },
            { event_type: "data_update" },
            { event_type: "invoice_download" },
            { event_type: "purchase" },
            { event_type: "visit" },
          ],
        },
        created_at: new Date(),
      },
    });
  }

  const products = await prisma.products.findMany();
  const buyers = await prisma.buyers.findMany();

  for (let i = 0; i < 10000; i++) {
    const product = products[Math.floor(Math.random() * products.length)];
    const buyer = buyers[Math.floor(Math.random() * buyers.length)];

    await prisma.transactions.create({
      data: {
        product_id: product.id,
        buyer_id: buyer.id,
        paid_price: product.price,
        tax: product.price * 0.19,
        created_at: new Date(),
      },
    });
  }
}

/**
 * Seed the database
 */
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
