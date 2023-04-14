import { Router } from "express";
import ProductController from "../Controller/products.controller.js";
const productController = new ProductController();
const router = Router();

import productRouter from "../Routes/products.routes.js";

router.get('/', (req, res) => {
    res.send("Server is live.")
});

router.use("/products",productRouter);

// Here add the rest of the routes or routers

export default router;