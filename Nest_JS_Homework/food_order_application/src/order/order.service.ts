import { Injectable } from '@nestjs/common';
import { Product,Order } from 'interfaces/interfaces';


@Injectable()
export class OrderService {
    orders: Order[] = [
        {id:"1", orderDate: new Date(), productsOrdered:[{id:"1", productName:"Phone",productPrice:599},{id:"2",productName:"TV",productPrice:999}]},
        {id:"2",orderDate: new Date(), productsOrdered:[{id:"3", productName:"Laptop",productPrice:799},{id:"4",productName:"PC",productPrice:850}]},
        {id:"3",orderDate: new Date(), productsOrdered:[{id:"5", productName:"Headset",productPrice:250},{id:"6",productName:"Chair",productPrice:420}]}
    ]
 getOrders(){
        return this.orders
    }

}


/*
export class OrderService {
    getOrders(){
        const orders: Order[] = [
            {id:"1", orderDate: new Date(), productsOrdered:[{id:"1", productName:"Phone",productPrice:599},{id:"2",productName:"TV",productPrice:999}]},
            {id:"2",orderDate: new Date(), productsOrdered:[{id:"3", productName:"laptop",productPrice:799},{id:"4",productName:"PC",productPrice:850}]},
            {id:"3",orderDate: new Date(), productsOrdered:[{id:"5", productName:"headset",productPrice:250},{id:"6",productName:"chair",productPrice:420}]}
        ]
        return orders;
    }
}
*/