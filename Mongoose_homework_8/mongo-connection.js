import mongoose from "mongoose";

const MONGO_URL = "mongodb+srv://tomislavtrpeski:666arsenal@cluster0.nlntpmn.mongodb.net/?retryWrites=true&w=majority";


export const mongo_connection = async () => {
    try {
        await mongoose.connect(MONGO_URL,{
            dbName: "food_app"
        })
        console.log("Connected to Mongo database");  
    } catch (error){
        throw new Error("Connection to Mongo database failed.");
    }
}