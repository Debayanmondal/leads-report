// /controllers/leadController.js
import Lead from "../models/Lead.js";

// Fetch leads with dynamic filters
export const getFilteredLeads = async (req, res) => {
  try {
    const filters = {};

    // Add filters based on query params
    if (req.query.status) {
      filters.status = req.query.status;
    }

    if (req.query.source) {
      filters.source = req.query.source;
    }

    if (req.query.owner) {
      filters.owner = req.query.owner;
    }

    if (req.query.industry) {
      filters.industry = req.query.industry;
    }

    if (req.query.isConverted) {
      filters.isConverted = req.query.isConverted === "true"; // Convert to boolean
    }

    if (req.query.dateCreated) {
      const startDate = new Date(req.query.dateCreated);
      startDate.setHours(0, 0, 0, 0);
      const endDate = new Date(req.query.dateCreated);
      endDate.setHours(23, 59, 59, 999);
      filters.dateCreated = { $gte: startDate, $lte: endDate };
    }

    // Fetch leads based on dynamic filters
    const leads = await Lead.find(filters);
    res.json(leads);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
