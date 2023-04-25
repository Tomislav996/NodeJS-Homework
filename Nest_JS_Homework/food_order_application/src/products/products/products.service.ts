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
    products: Product[] = [
        {
            id: '35',
            productName: 'Chips',
            productPrice: 35
        },
        {
            id: '27',
            productName: 'Oranges',
            productPrice: 30
        },
        {
            id: '19',
            productName: 'Chocolate Bar',
            productPrice: 19
        },
        {
            id: '44',
            productName: 'Chicken',
            productPrice: 120
        },
    ];

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

