import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderDtoCreate, OrderDtoUpdate } from './dto/order.dto';


interface IdRouteParams {
    id: string;
  }
@Controller('orders')
export class OrderController {
    constructor(private readonly orderService: OrderService){

    }
    @Get()
    getOrders(){
        const orders = this.orderService.getOrders();
        return orders;
    }
    @Get(`:id`)
    getSingleOrder(@Param()params: IdRouteParams){
        const id: string = params.id;
        const task = this.orderService.getOrderById(id);
        return task;
    }
    @Post()
    createOrder(@Body()body: OrderDtoCreate ){
        const id = this.orderService.createOrder(body);
        return {
            message: `New order placed with id: ${id}`,
        };
    } 
    @Put(`:id`)
    updateOrder(@Param()params: IdRouteParams, @Body()body: OrderDtoUpdate){
        const id: string = params.id;
        this.orderService.updateOrder(id,body);
        return {
            message: `order with id: ${id} updated`,
        }
    }
    @Delete(`:id`)
    deleteOrder(@Param()params: IdRouteParams){
        const id: string = params.id;
        this.orderService.deleteOrder(id);
        return {
            message: `order with id: ${id} deleted`,
        }
    }
}

