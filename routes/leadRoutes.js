// /routes/leadRoutes.js
import express from "express";
import { getFilteredLeads } from "../controllers/leadController.js";

const router = express.Router();

// Route to fetch leads with dynamic filters
router.get("/leads", getFilteredLeads);

export default router;
