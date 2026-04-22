import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    userId: { type: String, index: true },
    title: String,
    description: String,
  },
  { timestamps: true }
);

export default mongoose.models.Post ||
  mongoose.model("Post", PostSchema);