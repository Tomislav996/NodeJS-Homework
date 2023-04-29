import { Injectable, HttpException,HttpStatus } from '@nestjs/common';
import { Product,Order } from 'src/interfaces/interfaces';
import { OrderDtoCreate, OrderDtoUpdate } from './dto/order.dto';
import { v4 as uuid } from 'uuid';
import { Repository } from 'typeorm';
import { OrderEntity } from './entities/order.entity';
import { InjectRepository} from '@nestjs/typeorm';



@Injectable()
export class OrderService {
    constructor(@InjectRepository(OrderEntity)
    private readonly orderRepository: Repository<OrderEntity>) {}

    orders: Order[] = [
        {id:"1", orderDate: new Date(), productsOrdered:[{id:"1", productName:"Bananas",productPrice:77},{id:"2",productName:"Mangos",productPrice:99}]},
        {id:"2",orderDate: new Date(), productsOrdered:[{id:"3", productName:"Bread",productPrice:29},{id:"4",productName:"Smoked Fish",productPrice:150}]},
        {id:"3",orderDate: new Date(), productsOrdered:[{id:"5", productName:"Beef",productPrice:199},{id:"6",productName:"Canned Vegetables",productPrice:79}]}
    ]
 getOrders(){
     return this.orders
    }

 getOrderById(id: string){
    const order = this.orders.find(order => order.id === id);
    if(order === undefined){
        throw new HttpException(`order with id: ${id} does not exist`, HttpStatus.NOT_FOUND)
    }
    return order;
   }

 createOrder(orderDto: OrderDtoCreate){
    const order: Order = {
        id: uuid(),
        orderDate: new Date(),
        ...orderDto
    }
    this.orders.push(order);
    return order.id
 }

 updateOrder(id: string, orderDto: OrderDtoUpdate ){
    const orderFound = this.getOrderById(id);
    if(orderFound === undefined){
        throw new HttpException(`order with id: ${id} does not exist`, HttpStatus.NOT_FOUND);
    }
    let updatedOrders = this.orders.map(order =>{
        if(order.id === id){
            return {
                id: order.id,
                orderDate: new Date(),
                ...orderDto,
            };
        }
        return order;
    })
    this.orders = updatedOrders;
 }
 deleteOrder(id:string){
    let updatedOrders = this.orders.filter(order => order.id !== id);
    if(updatedOrders.length === this.orders.length){
        throw new HttpException(`order with id: ${id} does not exist`, HttpStatus.NOT_FOUND);
    }
    else {
        this.orders = updatedOrders;
    }
 }
 

}
