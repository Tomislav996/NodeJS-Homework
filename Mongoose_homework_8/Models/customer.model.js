import customerSchema from "../mongo_schemas/customer.schema.js";
import mongoose from "mongoose";

class CustomerModel {
    mongo_model;

    constructor(){
        this.mongo_model = mongoose.model("customer", customerSchema, "customers")
    }

    async getAllCustomers(){
        const customers = await this.mongo_model.find();
        return customers;
    }

    async getCustomerByid(customerId){
        const customer = await this.mongo_model.findById(customerId);
        return customer;
    }
    async deleteCustomer(customerId){
        await this.mongo_model.findByIdAndDelete(customerId);
    }
    async addCustomer(customerData){
        const newCustomer = new this.mongo_model(customerData);
        await newCustomer.save();
    }

    async updateCustomer(customerId, customerData){
        const customerFound = await this.mongo_model.findById(customerId);
        if(!customerFound){
            throw new Error({message: `customer with that id was not found`});
        }
        await this.mongo_model.findByIdAndUpdate({_id : customerId},{
            name: customerData.name || customerFound.name,
            email: customerData.email || customerFound.email,
            phone: customerData.phone || customerFound.phone,
            address: customerData.address || customerFound.address
        })
    }
}

export default CustomerModel;
