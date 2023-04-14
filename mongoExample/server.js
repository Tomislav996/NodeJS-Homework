import express from "express";
import { ObjectId } from "mongodb";
import mongoConnection from "./db/db-connections.js"

const app = express();

app.use(express.json())

app.get("/", (req,res)=> {
    res.send("Server is live.")
})

// GET ALL
app.get("/products", async (req,res)=> {
    const db = mongoConnection.getDb();
    const productsCollection = db.collection("products");
    const products = await productsCollection.find().toArray();
    res.send(products);
})

// GET BY ID
app.get("/products/:id", async (req,res)=> {
    const productId = req.params.id;
    const db = mongoConnection.getDb();
    const productsCollection = db.collection("products");
    const product = await productsCollection.findOne({_id: new ObjectId(productId) })
    if(!product){
        return res.status(404).send({message: `Product with id: ${productId} was not found`})
    }
    res.send(product);
})

//CREATE ONE

app.post("/products", async(req,res)=>{
    const body = req.body;
    const product = {
        name: body.name,
        price: body.price,
        origin: body.origin
    };
    const db = mongoConnection.getDb();
    const productsCollection = db.collection("products");

    await productsCollection.insertOne(product);
    res.status(201).send({message: `Product is created`})
})

//DELETE ONE

app.delete("/products/:id", async(req,res)=>{
    const productId = req.params.id;

    const db = mongoConnection.getDb();
    const productsCollection = db.collection("products");

    const productToDelete = await productsCollection.deleteOne({ _id: new ObjectId(productId) });

    if(productToDelete.deletedCount === 0){
      return  res.status(404).send({message: `Product with id: ${productId} was not found`});
    }
    console.log(productToDelete)
    res.status(201).send(`Product with id: ${productId} was deleted`);
})

//UPDATE ONE
app.put("/products/:id", async(req,res)=> {
    const productId = req.params.id;
    const body = req.body;
    const name = body.name;
    const price = body.price;
    const origin = body.origin;

    const db = mongoConnection.getDb();
    const productsCollection = db.collection("products");
    const productToUpdate = await productsCollection.updateOne({_id: new ObjectId(productId)},{$set:{name:name,price:price,origin:origin}});
    if(productToUpdate.matchedCount === 0){
       return res.status(404).send({message: `Product with id: ${productId} was not found`});
    }
    console.log(productToUpdate);
    res.status(201).send(`product with ${productId} was updated`);



})


app.listen(3000, ()=> {
    console.log("server is running on port 3000");
    mongoConnection.connectToDatabase();
})