import { Injectable } from '@nestjs/common';
import { Product } from 'src/interfaces/interfaces';

@Injectable()
export class ProductsService {
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
        return this.products;
    }
}

