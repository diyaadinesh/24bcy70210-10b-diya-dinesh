import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema(
  {
    postId: { type: String, index: true },
    userId: String,
    content: String,
  },
  { timestamps: true }
);

export default mongoose.models.Comment ||
  mongoose.model("Comment", CommentSchema);