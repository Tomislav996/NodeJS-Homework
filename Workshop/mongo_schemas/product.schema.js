import mongoose from "mongoose";

const {Schema} = mongoose;

const productSchema = new Schema({
    name:{
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number
    },
    reviews: [
        {
          rating: {
            type: Number,
          },
          comment: {
            type: String,
          }
        }
      ]
})


export default  productSchema;