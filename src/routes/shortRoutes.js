import express from "express";

import{
    createPublicShort, getUrlByShort
} from "../controllers/ShortController.js";

const router = express.Router();

router.post("/create-public-short", createPublicShort);

router.get("/get-public-url/:short", getUrlByShort)

export default router;