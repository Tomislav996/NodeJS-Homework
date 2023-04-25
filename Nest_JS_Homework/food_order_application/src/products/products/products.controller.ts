import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductDtoCreate } from './dto/product.dto';
import { IdRouteParams } from 'src/order/order.controller';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService){

    }
    @Get()
    getAllProducts(){
        const products = this.productsService.getAllProducts();
        return products;
    }
    @Post()
   async createProduct(@Body() body: ProductDtoCreate){
    const productId = await this.productsService.createProduct(body);
      return {
        message: `Product with id: ${productId} was created`
      }
    }
    @Get(':id')
    async findProductById(@Param()params: IdRouteParams) {
        const id: string = params.id
        const product = await this.productsService.findProductById(id);
        return product;
    }

}
