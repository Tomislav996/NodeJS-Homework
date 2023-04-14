import OrdersModel from "../Models/order.model.js"
import Joi from "joi";
import { createOrderSchema } from "../Validation/joi-validator.js";

const orderModel = new OrdersModel();

class OrdersContoller {
    async getAllOrder(req, res){
        const orders = await orderModel.getAllOrders();
        
        res.send(orders)
    }

    async getOrderById(req, res){
        const orderId = req.params.id;

        const order = await orderModel.getOrderById(orderId);
        if(!order){
            return res.status(404).send(`product with id: ${orderId} does not exist`)
         }

        res.send(order)
    }

    async addOrder(req, res){
        const customerId = req.body.customerId;
        const productId = req.body.productId
        try {
            const orderData = {
                order_date: new Date().toLocaleDateString(),
                customer_id: customerId,
                product_id: productId
            };
            await createOrderSchema.validateAsync(req.body);
            await orderModel.addOrder(orderData);
            res.status(201).send({message: "Order was created."})
        } catch (error){
            if(error instanceof Joi.ValidationError){
                return res.status(400).send({message: error.details[0].message})
            }
        }
    }

    async deleteOrder(req, res){
        const orderId = req.params.id;
        const orderFound = await orderModel.getOrderById(orderId)
        if(!orderFound){
            return res.status(404).send(`order with id: ${orderId} not found`);
        }
        await orderModel.deleteOrder(orderId);

        res.send({message: `Order with id: ${orderId} was deleted`})
    }
}

export default OrdersContoller