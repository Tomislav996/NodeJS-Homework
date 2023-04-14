import { MongoClient } from "mongodb";


const client = new MongoClient("mongodb+srv://tomislavtrpeski:666arsenal@cluster0.nlntpmn.mongodb.net/?retryWrites=true&w=majority");


async function connect(){
    try {
        await client.connect();
        console.log("Connected to mongo atlas db...")

        const db = client.db("store")
        const productsCollection = db.collection("products")

        const products = await productsCollection.find().toArray();
        console.log(products);

        const productFound = await productsCollection.findOne({name: "Oranges"});
        console.log(productFound)
    } catch (error){
        console.log(error);
    }
}

connect();