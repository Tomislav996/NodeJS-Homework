import express  from "express";
import blogsRouter from "./routes/blogRoutes.js";
import authRouter from "./routes/auth.Route.js";

const app = express();

app.use(express.json());

app.use(authRouter);

app.use("/blogs",  blogsRouter);

app.listen(3000,()=>{
    console.log("server is active...");
})