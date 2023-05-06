import { Controller, Get, Post, Body, Param, UseGuards, Put, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductDtoCreate } from './dto/product.dto';
import { ProductDtoUpdate } from './dto/product.dto';
import { IdRouteParams } from 'src/order/order.controller';
import { Role } from 'src/interfaces/role.enum';
import { Roles } from 'src/common/decorators/roles.decorator';
import { RolesGuard } from 'src/common/auth/role-guard/roles-guard';
import { JwtAuthGuard } from 'src/common/auth/jwt-auth/jwt-auth.guard';

@Controller('products')
@UseGuards(JwtAuthGuard, RolesGuard)
export class ProductsController {
    constructor(private readonly productsService: ProductsService){

    }
    @Get()
    getAllProducts(){
        const products = this.productsService.getAllProducts();
        return products;
    }

    @Get(':id')
    async findProductById(@Param()params: IdRouteParams) {
        const id: string = params.id
        const product = await this.productsService.findProductById(id);
        return product;
    }

    @Post()
    @Roles(Role.ADMIN)
   async createProduct(@Body() body: ProductDtoCreate){
    const productId = await this.productsService.createProduct(body);
      return {
        message: `Product with id: ${productId} was created`
      }
   }

   @Put(':id')
   @Roles(Role.ADMIN)
   async updateProduct(@Param('id')id: string, @Body() productReq: ProductDtoUpdate) {
    const productId = await this.productsService.updateProduct(id, productReq);

    return {
      message : `Product with id: ${productId} was updated `
    }
   }

   @Delete(':id')
   @Roles(Role.ADMIN)
   async deleteProduct(@Param('id') id: string) {
    await this.productsService.deleteProduct(id);
    return {
      message : `Product with id: ${id} was deleted`
    }
   }
}
