import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Product } from 'src/interfaces/interfaces';
import { ProductDtoCreate } from './dto/product.dto';
import{v4 as uuid} from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductsEntity } from './entities/product.entity';
import {Repository} from 'typeorm';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(ProductsEntity)
        private readonly productsRepository: Repository<ProductsEntity>,
    ){}

    getAllProducts() {
        return this.productsRepository.find();
    }

    async createProduct(productDtoCreate: ProductDtoCreate) {
        const product: Product = {
            ...productDtoCreate,
            id: uuid(),
        }

        const createdProduct =  this.productsRepository.create(product);
        await this.productsRepository.save(createdProduct);
        return createdProduct.id;
    };

    async findProductById(id: string) {
        const product = await this.productsRepository.findOneBy({id: id});
        if(!product){
            throw new HttpException(`Product with id: ${id} was not found`, HttpStatus.NOT_FOUND)
        }
        return product;
    }

}


