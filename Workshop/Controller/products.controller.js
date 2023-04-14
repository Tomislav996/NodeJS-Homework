import ProductModel from "../Models/products.model.js";

const productModel = new ProductModel();

class ProductController{
    async getAllProducts(){
        const products = await productModel.getAllProducts();
        return products;
    }
    async addProduct(productData){
        await productModel.addProduct(productData);
    };
    async getProductById(productId){
        const product = await productModel.getProductById(productId);
        return product
    }
    async getProductByKeyword(keyword){
        const products = await productModel.getProductByKeyword(keyword);
        return products;
    }
}


export default ProductController;