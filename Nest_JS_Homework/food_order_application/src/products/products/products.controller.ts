import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService){

    }
    @Get()
    getAllProducts(){
        const products = this.productsService.getAllProducts();
        return products;
    }
}
