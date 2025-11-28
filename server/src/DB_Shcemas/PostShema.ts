import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  id: String,
  title: String,
  content: String,
});

export const PostModel = mongoose.model("Post", PostSchema);
