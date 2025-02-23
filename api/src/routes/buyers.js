const express = require("express");
const router = express.Router();
const BuyerController = require("../controllers/BuyerController");

/**
 * @swagger
 * tags:
 *   name: Compradores
 *   description: Operaciones relacionadas con compradores
 */

/**
 * @swagger
 * /buyers:
 *   get:
 *     summary: Obtener la lista de compradores
 *     description: Retorna una lista de todos los compradores.
 *     tags: [Compradores]
 *     responses:
 *       200:
 *         description: Lista de compradores
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Comprador'
 */
router.get("/", BuyerController.listBuyers);
/**
 * @swagger
 * components:
 *   schemas:
 *     Comprador:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: ID del comprador
 *         nombres:
 *           type: string
 *           description: Nombres del comprador
 *         apellidos:
 *           type: string
 *           description: Apellidos del comprador
 *         tipoId:
 *           type: string
 *           description: Tipo de identificación del comprador (CC, CE, etc.)
 *         fechaCreacion:
 *           type: string
 *           format: date-time
 *           description: Fecha de creación del registro del comprador
 */

module.exports = router;
