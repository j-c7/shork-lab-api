import express from "express";

import {
    createPublicShort, getUrlByShort
} from "../controllers/ShortController.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Public Short
 *   description: Acorta enlaces sin registrarse.
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Url:
 *       type: object
 *       properties:
 *         url:
 *           type: string
 *           description: url completa.
 *       example:
 *         url: https://www.youtube.com/
 *        
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     PublicShortRes:
 *       type: object
 *       properties:
 *         id:
 *           type: int
 *           description: id de la url acortada.
 *         url:
 *           type: string
 *           description: url original.
 *         shortUrl:
 *           type: string
 *           description: url acortada. 
 *       example:
 *         id: 1
 *         url: https://www.youtube.com/
 *         shortUrl: abc1
 */

/**
 * @swagger
 * /api/short/create-public-short:
 *   post:
 *     summary: Crea un nuevo enlace acortado
 *     tags: [Public Short]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Url'
 *     responses:
 *       201:
 *         description: El link fue acortado correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PublicShortRes'
 *       500:
 *         description: Some server error
 */
router.post("/create-public-short", createPublicShort);

/**
 * @swagger
 * components:
 *   schemas:
 *     ObtainedUrl:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           description: mensaje de la respuesta.
 *         data:
 *            type: object
 *            description: devuelve los datos de la url asociada al link acortado. 
 *              
 *       example:
 *         msg: Url acortada con exito.
 *         data: {
 *           "id": 7,
 *           "url": "https://www.youtube.com/",
 *           "shortUrl": "abc"
 *         }
 *          
 */

/**
 * @swagger
 *  /api/short/get-public-url/{short}:
 *   get:
 *     summary: Obtiene la url utilizando el código del enlace acortado
 *     tags: [Public Short]
 *     parameters:
 *       - in: path
 *         name: short
 *         schema:
 *           type: string
 *         required: true
 *         description: El codigo acortado vinculado a la url.
 *     responses:
 *       200:
 *         description: Url obtenida correctamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ObtainedUrl'
 *       403:
 *         description: Url no encontrada.
 */
router.get("/get-public-url/:short", getUrlByShort)

export default router;