import mongoose from "mongoose";
import { BlogModel } from "../types/blog.types";

const BlogModelSchema = new mongoose.Schema<BlogModel>({
  title: {
    required: true,
    type: String,
  },

  description: {
    required: true,
    type: String,
  },

  content: {
    required: true,
    type: String,
  },

  createdAt: {
    required: true,
    type: Date,
    default: new Date(),
  },
});

const Blog = mongoose.model("blog", BlogModelSchema);
export default Blog;
