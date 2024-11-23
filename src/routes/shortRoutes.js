import express from "express";

import{
    createPublicShort
} from "../controllers/ShortController.js";

const router = express.Router();

router.post("/create-public-short", createPublicShort);

export default router;