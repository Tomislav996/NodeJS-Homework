import { Injectable, HttpException, NotFoundException, HttpStatus } from '@nestjs/common';
import { Product } from 'src/interfaces/interfaces';
import { ProductDtoCreate } from './dto/product.dto';
import{v4 as uuid} from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductsEntity } from './entities/product.entity';
import {Repository} from 'typeorm';
import { ProductDtoUpdate } from './dto/product.dto';

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

        const objectOfProductEntinty = this.productsRepository.create(product);

        await this.productsRepository.save(objectOfProductEntinty);
        return product.id;
    };
    async updateProduct(id:string, productDtoUpdate: ProductDtoUpdate){
        const updatedProduct: Product = {
            id: id,
            ...productDtoUpdate,
        }

        const product = await this.productsRepository.preload({
            id: id,
            ...updatedProduct
        })

        if(!product){
            throw new NotFoundException(`Product with id: ${id} not found`)
        }

        await this.productsRepository.save(product);

        return product.id
    }

    async findProductById(id: string) {
        const product = await this.productsRepository.findOneBy({id: id});
        if(!product){
            throw new HttpException(`Product with id: ${id} was not found`, HttpStatus.NOT_FOUND)
        }
        return product;
    }

    async deleteProduct(id: string) {
        const product = await this.productsRepository.findOneBy({id: id});
        if(!product){
            throw new HttpException(`Product with id: ${id} was not found`, HttpStatus.NOT_FOUND)
        }
        await this.productsRepository.delete(id);
    }

}


