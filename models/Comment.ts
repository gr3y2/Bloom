import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  name: { type: String, default: "Anonymous" },
  page: { type: String, required: true, enum: ["youth", "drama", "events"] },
  text: { type: String, required: true },
  approved: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Comment || mongoose.model("Comment", CommentSchema);
