import express from "express";

import{
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
 *     PublicShort:
 *       type: object
 *       properties:
 *         url:
 *           type: string
 *           description: url que desea acortar.
 *       example:
 *         url: https://www.youtube.com/
 *        
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     PublicShortResponse:
 *       type: object
 *       properties:
 *         url:
 *           type: string
 *           description: url original.
 *         shortUrl:
 *           type: string
 *           description: url acortada. 
 *       example:
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
 *             $ref: '#/components/schemas/PublicShort'
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

router.get("/get-public-url/:short", getUrlByShort)

export default router;