import BlogsModel from "../models/blogs.model.js";
const blogsModel = new BlogsModel();


class BlogsController {
    async listAllBlogs() {
        const listedBlogs = await blogsModel.getAllBlogs();
        return listedBlogs;
    }
    async createBlogPost(title,body,author,date,tags){
        await blogsModel.createBlogPost(title,body,author,date,tags);
    }

    async deleteBlogPost(blogId){
        await blogsModel.deleteBlogPost(blogId);
    }
    async editBlogPost(blogId, reqBody){
        await blogsModel.editBlogPost(blogId,reqBody);
    }
    async returnCustomBlogs(keywords){
        const fillteredBlogs = await blogsModel.returnCustomBlogs(keywords);
        return fillteredBlogs;
    }
}


export default BlogsController