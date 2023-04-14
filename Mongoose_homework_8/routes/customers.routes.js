import { Router } from "express";
import CustomerController from "../controllers/customer.contoller.js";
import Joi from "joi";
import { createCustomerSchema } from "../Validation/joi-validator.js";

const customerController = new CustomerController();

const customerRouter = Router();

customerRouter.get("/", async (req,res)=> {
    const customers = await customerController.getAllCustomers();
    res.send(customers);
})

customerRouter.get("/:id", async (req,res)=> {
    const customerId = req.params.id
    const customer = await customerController.getCustomerByid(customerId);
    if(!customer){
       return res.status(404).send(`customer with id: ${customerId} does not exist`)
    }
    res.send(customer);
})

customerRouter.post("/", async (req,res)=> {
    const {name,email,phone,address} = req.body;
    try {
      const customerData = {
        name: name,
        email: email,
        phone: phone,
        address: address
      };
      await createCustomerSchema.validateAsync(customerData);
      await customerController.addCustomer(customerData);
      res.status(201).send({message: "customer is added."})
    } catch(error){
      if(error instanceof Joi.ValidationError){
        return res.status(400).send({message: error.details[0].message})
      }
    }
  });

customerRouter.patch("/:id", async (req,res)=> {
    const customerId = req.params.id;
    const {name,email,phone,address} = req.body;
    const customerData = {
        name: name,
        email: email,
        phone: phone,
        address: address
    }
    try{
        await customerController.updateCustomer(customerId, customerData)
        res.send(`Customer with id: ${customerId} was updated`);
    } catch (error){
        res.status(404).send(`an error occured`);
    }
})

customerRouter.delete("/:id",async (req,res)=> {
    const customerId = req.params.id
    const customerFound = await customerController.getCustomerByid(customerId);
    if(!customerFound){
        return res.send(`No customer found under that id`)
    }
    await customerController.deleteCustomer(customerId)
    res.send(`Customer with id: ${customerId} was deleted.`)
 })


export default customerRouter;