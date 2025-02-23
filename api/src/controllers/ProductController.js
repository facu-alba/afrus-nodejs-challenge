const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

/**
 * List all products
 *
 * @param {*} request
 * @param {*} response
 */
const listProducts = async (request, response) => {
  try {
    const products = await prisma.products.findMany({
      orderBy: [{ created_at: "desc" }],
    });
    response.json(products);
  } catch (error) {
    response.status(500).json({ error: "Error al obtener los productos" });
  }
};

/**
 * Store a product
 *
 * @param {*} request
 * @param {*} response
 */
const storeProduct = async (request, response) => {
  const { name, description, price, quantity } = request.body;
  try {
    const product = await prisma.products.create({
      data: {
        name,
        description,
        price,
        quantity,
      },
    });
    response.status(201).json(product);
  } catch (error) {
    response.status(500).json({ error: "Error al crear el producto" });
  }
};

/**
 * Delete a product
 *
 * @param {*} request
 * @param {*} response
 */
const deleteProduct = async (request, response) => {
  const { id } = request.params;
  try {
    await prisma.products.delete({
      where: { id: parseInt(id) },
    });
    response.status(204).send();
  } catch (error) {
    response.status(500).json({ error: "Error al eliminar el producto" });
  }
};

module.exports = {
  listProducts,
  storeProduct,
  deleteProduct,
};
