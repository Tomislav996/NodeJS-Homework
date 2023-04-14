import fileService from "../auxiliary-functions/file-service.js";
import Blogpost from "../entities/blogs-entity.js";



class BlogsModel {
    async getAllBlogs() {
        const jsonBlogs = await fileService.readFile("./blogs.json");
        const blogs = JSON.parse(jsonBlogs);
        return blogs;
    }

    async createBlogPost(title,body,author,date,tags){
        const jsonBlogs = await fileService.readFile("./blogs.json");
        const blogs = JSON.parse(jsonBlogs);

        const newBlog = new Blogpost(title,body,author,date,tags);

        blogs.push(newBlog)
        await fileService.writeTofile("./blogs.json", JSON.stringify(blogs, null, 2));
    }

    async deleteBlogPost(blogId){
        const jsonBlogs = await fileService.readFile("./blogs.json");
        const blogs = JSON.parse(jsonBlogs);
        const filteredBlogs = blogs.filter(blog => blog.id !== blogId)
        if(filteredBlogs.length === blogs.length){
            throw new Error(`Blog post with id ${blogId} not found`)
        } else {
            await fileService.writeTofile("./blogs.json", JSON.stringify(filteredBlogs, null, 2));
        }
    }

    
    /*
    async deleteBlogPost(blogId){
        const jsonBlogs = await fileService.readFile("./blogs.json");
        const blogs = JSON.parse(jsonBlogs);
        const filteredBlogs = blogs.filter(blog => blog.id !== blogId)
        if(filteredBlogs.length === blogs.length){
            return false;
        } else {
            await fileService.writeTofile("./blogs.json", JSON.stringify(filteredBlogs, null, 2));
            return true;
        }
    }
    */
   

    async editBlogPost(blogId,reqBody){
        const jsonBlogs = await fileService.readFile("./blogs.json");
        const blogs = JSON.parse(jsonBlogs);
        const editedBlogPosts = blogs.map( post => {
            if (post.id === blogId){
                post.title = reqBody.title;
                post.body = reqBody.body;
                post.tags = reqBody.tags;
                return post;

            }
            return post;
        })
        await fileService.writeTofile("./blogs.json", JSON.stringify(editedBlogPosts, null, 2));
        
        
    }


    async returnCustomBlogs(keywords){
        const jsonBlogs = await fileService.readFile("./blogs.json");
        const blogs = JSON.parse(jsonBlogs);
        if(keywords === undefined){
            return {success:false,message:`No keywords defined`}
        }

        const filteredBlogs = blogs.filter(blog => blog.tags.some(tag => keywords.includes(tag)));
        if(filteredBlogs.length === 0 ){
            return {success:false, message:`No blogs found under the specified tags`}
        } else {
            return filteredBlogs;
        }
    }


    
}





export default BlogsModel;