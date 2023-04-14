import express from "express";

import BlogsController from "../controllers/blogs-controller.js"

const blogsController = new BlogsController();

import { authSession } from "../sessions/auth.Session.js";

const blogsRouter = express.Router();

blogsRouter.get("/customBlogs", async (req,res)=> {
    const keywords = req.query.tag;
    const blogResults = await blogsController.returnCustomBlogs(keywords);
    if(blogResults.success === false){
        res.status(404).send(blogResults.message);
    } else {
        res.status(201).send(blogResults);
    }
})

blogsRouter.get("/", async (req, res) => {
    const allBlogs = await blogsController.listAllBlogs();
    res.send(allBlogs);
});

blogsRouter.post("/",  authSession, async (req,res)=> {
    const body = req.body;
    const session = req.session;
    if(session.user === undefined || session.user.isLoggedIn === false){
        res.status(401).send("User not logged in");
        return;
    }
    if(!body.title || !body.body || !body.author || !body.date || !body.tags){
        res.status(404).send("Invalid request");
        return;
    }
    await blogsController.createBlogPost(body.title,body.body,body.author,body.date,body.tags);
    res.status(201).send("new blog created")
})

blogsRouter.delete("/:id", async (req,res)=> {

    const blogId = req.params.id
    try {
        await blogsController.deleteBlogPost(blogId);
        res.status(200).send(`Blog post with id ${blogId} was deleted successfully`)
    } catch (error){
        res.status(404).send(error.message);
    }

    /*
    const blogId = req.params.id;
    const result = await blogsController.deleteBlogPost(blogId);

    if (result) {
        res.status(200).send(`Blog post with id ${blogId} was deleted successfully`);
    } else {
        res.status(404).send(`Blog post not found`);
    }
    */
})


blogsRouter.patch("/:id", async(req,res)=> {
    const blogId = req.params.id;
    const reqBody = req.body;
    await blogsController.editBlogPost(blogId,reqBody);
    res.status(201).send('updated the blog post')

})



export default blogsRouter;
