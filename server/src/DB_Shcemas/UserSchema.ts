import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: String,
  name: String,
  age: Number,
  email: { type: String, unique: true },
  nationality: String,
  isActive: Boolean,
  friends: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  friendsRequest: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
});

export const UserModel = mongoose.model("User", userSchema);
