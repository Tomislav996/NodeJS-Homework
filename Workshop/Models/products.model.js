import mongoose from "mongoose";

import productSchema from "../mongo_schemas/product.schema.js";

class ProductModel {
    mongo_model;
    constructor(){
        this.mongo_model = mongoose.model("product", productSchema, "products");
    }
    async getAllProducts(){
        const products = await this.mongo_model.find();
        return products
    }
    async addProduct(productData){
        const product = new this.mongo_model(productData);
        await product.save();
    }
    async getProductById(productId) {
        const product = await this.mongo_model.findById(productId);
        return product;
    }
    async getProductByKeyword(keyword) {
        const products = await this.mongo_model.find({ name: { $regex: new RegExp(keyword, 'i') } });
        return products;
      }
}


export default ProductModel;