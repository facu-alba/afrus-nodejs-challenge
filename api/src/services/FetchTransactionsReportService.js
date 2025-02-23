const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

/**
 * Fetch transactions report
 */
async function fetchTransactionsReport() {
  try {
    const transactions = await prisma.transactions.findMany({
      orderBy: [{ created_at: "desc" }],
      include: {
        buyer: {
          include: {
            events: true,
          },
        },
      },
    });

    const report = transactions.map((transaction) => {
      const event = transaction.buyer.events.find((event) => event.event_type);

      return {
        user_name: `${transaction.buyer.name} ${transaction.buyer.lastname}`,
        user_id: transaction.buyer.id,
        user_document: transaction.buyer.type_id,
        transaction_number: transaction.id,
        transaction_value: transaction.paid_price,
        transaction_date: transaction.created_at,
        event_id: event ? event.id : null,
        event_type: event ? event.event_type : null,
      };
    });

    console.log("Informe de transacciones:");
    console.log(report);
  } catch (error) {
    console.error(
      "Error al obtener el informe de transacciones:",
      error.message
    );
  }
}

(async () => {
  await fetchTransactionsReport();
  await prisma.$disconnect();
})();
