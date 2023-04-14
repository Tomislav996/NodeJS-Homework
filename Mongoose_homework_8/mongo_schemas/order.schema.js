import mongoose from "mongoose";

const { Schema } = mongoose;

const orderSchema = new Schema({
    order_date: {
        type: String
    },

    product_id: [
        {
            type: Schema.Types.ObjectId,
            ref: "Product"
        }
    ],
    customer_id: [
        {
            type: Schema.Types.ObjectId,
            ref: "customer"
        }
    ]


});

export default orderSchema;