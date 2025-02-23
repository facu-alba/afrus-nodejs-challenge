const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

/**
 * Fetch filtered products
 */
async function fetchFilteredProducts() {
  prisma.$connect();

  try {
    const productos = await prisma.products.findMany({
      where: {
        price: { gt: 50 },
        quantity: { lt: 20 },
      },
    });

    console.log("Productos con precio > 50 y stock < 20:");
    console.log(productos);
  } catch (error) {
    console.error("Error al obtener los productos:", error.message);
  }
}

(async () => {
  await fetchFilteredProducts();
  await prisma.$disconnect();
})();
