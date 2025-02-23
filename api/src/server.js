const express = require("express");
// const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");
const swaggerDocument = require("./../swagger.json");

const buyers = require("./routes/buyers");
const products = require("./routes/products");
const events = require("./routes/events");

const app = express();
const PORT = 3001;

app.use(express.json());
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.get("/", (request, response) => {
  response.send({
    message: "Bienvenido a la API de gestión de productos y compradores.",
  });
});

app.use("/buyers", buyers);
app.use("/products", products);
app.use("/events", events);

module.exports = app;

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
}

/*const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "afrus node.js challenge",
      version: "1.0.0",
      description:
        "Documentación de la API REST para gestionar productos y compradores.",
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
        description: "Servidor local",
      },
    ],
  },
  apis: ["./src/routes/*.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

const fs = require("fs");
const path = require("path");

try {
  const swaggerFilePath = path.join(__dirname, "./swagger.json");
  fs.writeFileSync(swaggerFilePath, JSON.stringify(swaggerDocs, null, 2), {
    flag: "w",
  });
  console.log(
    "Archivo swagger.json generado correctamente en:",
    swaggerFilePath
  );
} catch (err) {
  console.error(err);
}*/
