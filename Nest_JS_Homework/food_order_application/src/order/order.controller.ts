import { Controller, Get } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller('orders')
export class OrderController {
    constructor(private readonly orderService: OrderService){

    }
    @Get()
    getOrders(){
        const orders = this.orderService.getOrders();
        return orders;
    }
}

