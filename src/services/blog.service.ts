import Blog from "../models/Blog.model";

class BlogService {
  async getAllBlogs() {
    try {
      const blogs = await Blog.find();
      return blogs;
    } catch (e) {
      console.log(e);
      throw new Error("Error while getting all the blogs.");
    }
  }
  async getBlog(id: string) {
    try {
      const blog = await Blog.findById(id);
      return blog;
    } catch (e) {
      console.log(e);
      throw new Error("Error while getting the blog id: " + id);
    }
  }
}

export default new BlogService();
