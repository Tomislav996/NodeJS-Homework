import mongoose from "mongoose";

const {Schema} = mongoose;

const customerSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    address: {
        street:{type: String},
        city: {type: String},
        country:{type: String},
        zip:{type: String}
    }

});

export default customerSchema;