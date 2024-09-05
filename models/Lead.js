import mongoose from "mongoose";

const leadSchema = new mongoose.Schema({
  name: String,
  status: String,
  source: String,
  owner: String,
  industry: String,
  isConverted: Boolean,
  dateCreated: { type: Date, default: Date.now },
});

const Lead = mongoose.model("Lead", leadSchema);

export default Lead;
