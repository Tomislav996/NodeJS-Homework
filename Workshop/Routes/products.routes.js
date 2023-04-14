import { Router } from "express";

const productRouter = Router();

import ProductController from "../Controller/products.controller.js";

const productController = new ProductController();

productRouter.get("/", async (req,res)=> {
    const products = await productController.getAllProducts();
    res.send(products);
})

productRouter.post("/", async(req,res)=> {
    const {name, description, price, reviews } = req.body;

    const productData = {
        name: name,
        description: description,
        price: price,
        reviews: reviews
    };

    await productController.addProduct(productData);

    res.status(201).send({message: "New product is created."})
})

productRouter.get("/:id", async(req,res)=> {
    const productId = req.params.id;
    const product = await productController.getProductById(productId);
    res.send(product);
})

productRouter.get("/customProducts", async(req,res)=> {
    const keyword = req.query.name;
    const products = await productController.getProductByKeyword(keyword);
    res.send(products);
})


export default productRouter;