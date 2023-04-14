import { Router } from "express";
import Joi from "joi";
import { createProductSchema } from "../Validation/joi-validator.js";

const productRouter = Router();

import ProductsController from "../controllers/products.controller.js";

const productController = new ProductsController();


productRouter.get("/", async (req, res) => {
    const products = await productController.getAllProducts();

    res.send(products)
});


productRouter.post("/", async(req, res) => {
    const {name, description, price} = req.body;
    try {
        const productData = {
            name: name,
            description: description,
            price: price
        };
        await createProductSchema.validateAsync(productData);
        await productController.addProduct(productData);
        res.status(201).send({message: "New product is created."})
    } catch(error){
        return res.status(400).send({message: error.details[0].message})
    }
});


productRouter.get('/:id', async(req, res) => {
    const id = req.params.id;

    const product = await productController.getProductById(id);
    if(!product){
        return res.status(404).send(`product with id: ${id} does not exist`)
     }

    res.send(product);
});


productRouter.patch('/:id', async(req, res) => {
    const id = req.params.id;

    const {name, description, price} = req.body;

    const productData = {
        name: name,
        description: description,
        price: price
    };
    

    try {
        await productController.updateProduct(id, productData);
        res.send({message: `Product with id: ${id} was updated.`})
    } catch (error) {
        res.status(404).send(`An error occured`)
    }
});


productRouter.delete('/:id', async(req, res) => {
    const id = req.params.id;
    const productFound = await productController.getProductById(id);
    if(!productFound){
      return  res.send(`product not found`);
    }
    await productController.deleteProduct(id);

    res.send(`Product with id: ${id} was deleted.`)
});

export default productRouter;