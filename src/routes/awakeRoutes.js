import express from "express";
import Awake from "../controllers/Awake.js";

const router = express.Router();

router.get("/awake", Awake);

export default router;