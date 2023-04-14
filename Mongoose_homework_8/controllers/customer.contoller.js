import CustomerModel from "../Models/customer.model.js";

const customerModel = new CustomerModel();

class CustomerController {
    async  getAllCustomers() {
        const customers = await customerModel.getAllCustomers();
        return customers;
    }

    async getCustomerByid(customerId){
        const customer = await customerModel.getCustomerByid(customerId);
        return customer;
    }

    async deleteCustomer(customerId) {
        await customerModel.deleteCustomer(customerId)
    }
    async addCustomer(customerData) {
        await customerModel.addCustomer(customerData);
    }

    async updateCustomer(customerId,customerData){
        await customerModel.updateCustomer(customerId,customerData);
    }
}

export default CustomerController;