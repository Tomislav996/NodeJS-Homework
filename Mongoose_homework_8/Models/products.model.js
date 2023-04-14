import mongoose from "mongoose";

import productSchema from "../mongo_schemas/product.schema.js";

class ProductModel {
    mongo_model;

    constructor(){
        this.mongo_model = mongoose.model("Product", productSchema,"Products");
    }
    async getAllProducts() {
        const products = await this.mongo_model.find();
        return products;
    }
    async getProductById(productId) {
        const product = await this.mongo_model.findById(productId);
        return product;
    }

    async addProduct(productData) {
        const product = new this.mongo_model(productData);
        await product.save();
    }

    async updateProduct(productId,productData){
        const product = await this.mongo_model.findById(productId);
        if(!product){
            throw new Error(`Product with id: ${productId} was not found`);
        }
        await this.mongo_model.updateOne({_id: productId }, { 
            name: productData.name || product.name,
            description: productData.description || product.description,
            price: productData.price || product.price
        })
    }

    async deleteProduct(productId){
        await this.mongo_model.findByIdAndDelete(productId)
    }
}

export default ProductModel;