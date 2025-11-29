import { PostModel } from "../DB_Shcemas/PostShema";
import { Types } from "mongoose";

type Post = {
  id: String;
  title: String;
  content: String;
  authorId: String;
};

export async function GetPosts() {
  try {
    const posts = await PostModel.find();
    return posts;
  } catch (err) {
    console.error("Error fetching posts:", err);
    throw err;
  }
}

export async function CreatePost(params: any) {
  try {
    const newPost = await PostModel.create(params);
    return newPost;
  } catch (err) {
    console.error("Error creating post:", err);
    throw err;
  }
}

export async function UpdatePost(id: string, updateData: any) {
  try {
    const updatedPost = await PostModel.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    return updatedPost;
  } catch (err) {
    console.error("Error updating post:", err);
    throw err;
  }
}

export async function DeletePost(id: string) {
  try {
    await PostModel.findByIdAndDelete(id);
    return `Post with ID ${id} has been deleted.`;
  } catch (err) {
    console.error("Error deleting post:", err);
    throw err;
  }
}

export async function GetPostsByAuthor(authorId: string) {
  try {
    const posts = await PostModel.find({ authorId: authorId });
    return posts;
  } catch (err) {
    console.error("Error fetching posts by author:", err);
    throw err;
  }
}
