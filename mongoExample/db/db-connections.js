import { MongoClient } from "mongodb";

const MONGO_URL = "mongodb+srv://tomislavtrpeski:666arsenal@cluster0.nlntpmn.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(MONGO_URL);


let dbConnection;

export default {
    async connectToDatabase(){
        try {
            const connection = await client.connect(); //connect to DB

            dbConnection = connection.db("store");
            console.log("Connected to MONGO DB");
        } catch (error) {
            console.log("Couldnt connect to MONGO DB");
            throw new Error(error);
        }
    },


    getDb(){
        if(!dbConnection){
            throw new Error("Database connection not initialized")
        }

        return dbConnection;
    }
}