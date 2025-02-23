const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

/**
 * Store a buyer event
 *
 * @param {*} request
 * @param {*} response
 */
const storeBuyerEvent = async (request, response) => {
  const { buyerId, eventType } = request.body;
  try {
    const event = await prisma.buyer_events.create({
      data: {
        buyer_id: parseInt(buyerId),
        event_type: eventType,
      },
    });
    response.status(201).json({
      event: event,
    });
  } catch (error) {
    response.status(500).json({ error: "Error al crear el evento" });
  }
};

module.exports = {
  storeBuyerEvent,
};
