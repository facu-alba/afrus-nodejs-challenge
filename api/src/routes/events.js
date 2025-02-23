const express = require("express");
const router = express.Router();
const EventController = require("../controllers/EventController");

/**
 * @swagger
 * tags:
 *   name: Eventos
 *   description: Operaciones relacionadas con eventos de compradores
 */

/**
 * @swagger
 * /events:
 *   post:
 *     summary: Crear un nuevo evento de comprador
 *     description: Registra un nuevo evento realizado por un comprador.
 *     tags: [Eventos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Evento'
 *     responses:
 *       201:
 *         description: Evento creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Evento'
 *       400:
 *         description: Datos de entrada inválidos
 */
router.post("/", EventController.storeBuyerEvent);
/**
 * @swagger
 * components:
 *   schemas:
 *     Evento:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: ID del evento
 *         compradorId:
 *           type: integer
 *           description: ID del comprador asociado al evento
 *         tipoEvento:
 *           type: string
 *           description: Tipo de evento (compra, devolución, visita, etc.)
 *         fecha:
 *           type: string
 *           format: date-time
 *           description: Fecha y hora del evento
 */

module.exports = router;
