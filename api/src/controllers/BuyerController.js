const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

/**
 * List all buyers
 *
 * @param {*} request
 * @param {*} response
 */
const listBuyers = async (request, response) => {
  try {
    const buyers = await prisma.buyers.findMany({
      orderBy: [{ created_at: "desc" }],
    });
    response.json(buyers);
  } catch (error) {
    response.status(500).json({ error: "Error al obtener los compradores" });
  }
};

module.exports = {
  listBuyers,
};
