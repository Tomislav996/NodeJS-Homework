
import express from "express";
const app = express();
import fs from "fs"

app.use(express.json());     
app.use(express.urlencoded({
    extended:true
}))

let products  = JSON.parse((fs.readFileSync("./products.json", {encoding: "utf-8"})));

// save request messages to logs.txt
app.use((req, res, next) => {
    let time = new Date().toLocaleTimeString();
    fs.appendFileSync("./logs.txt",`Request on the route ${req.path} was made at ${time}\n`);
    next();
});

// default route
app.get("/", (req, res)=>{
    res.send(`<h1>This is the default route</h1>`)
})

// get all products
app.get("/products", (req,res)=>{
    let productsJSON = JSON.stringify(products, null, 2);
    res.type('json').send(productsJSON);
})

//Get product by id
app.get("/products/:id", (req,res)=>{
    const productId = (req.params.id);
    let product = products.find((p)=> p.id === (productId));
    if(product){
        res.type(`json`).send(product);
    }
    else{
        res.status(404).send("<h1>Product not found</h1>")
    }

})

//Add new product
app.post("/products/productAdd",(req,res)=>{
    const body = req.body;
    let product = {
        id: body.id,
        name: body.name,
        price: body.price,
        rating: body.rating,
        description: body.description,
        category: body.category,
        isInStock: body.isInStock
    }
    products.push(product);
    fs.writeFileSync("./products.json", JSON.stringify(products, null, 2));
    res.send(product);
})

// Edit a product by id,
app.put('/products/productEdit/:id', (req, res) => {
    let productId = req.params.id
    let body = req.body;
    const index = products.findIndex(p => p.id === productId);
    if (index !== -1) {
      let updatedProduct = {
        id: productId,
        name: body.name,
        price: body.price,
        rating: body.rating,
        description: body.description,
        category: body.category,
        isInStock: body.isInStock
      };
      products[index] = updatedProduct;
      fs.writeFileSync('./products.json', JSON.stringify(products, null,2));
      res.send(updatedProduct);
    } else {
      res.status(404).send('Product not found');
    }
  });

// Remove a product by ID
app.delete("/products/deleteProduct/:id", (req,res)=>{
    let productId = req.params.id;
    let filteredProducts = products.filter(p => p.id !== productId);
    if(filteredProducts.length === products.length){
        res.status(404).send(`product with id ${productId}, does not exist`);
        return;
    }
    fs.writeFileSync(`./products.json`, JSON.stringify(filteredProducts, null, 2));
    res.send(`product with the id ${productId}, was succesfully removed`);
})

// Delete all products
app.delete("/products/deleteAll",(req,res)=>{
    products = [];
    fs.writeFileSync('./products.json', JSON.stringify(products, null,2));
    res.send("Products deleted")
})

// Set product to be out of stock by id
app.patch("/products/productOutOfstock/:id",(req,res)=>{
    let productId = req.params.id;
    let index = products.findIndex(p => p.id === productId);
    if(index !== -1){
        products[index].isInStock = false;
        fs.writeFileSync('./products.json', JSON.stringify(products, null,2));
        res.json(`Product with id ${productId} has been set to out of stock.`);
    }
    else{
        res.status(404).send(`Product not found`)
    }
})

//add product by id to cart
app.post("/products/addTocart/:id",(req,res)=>{
    let productId = req.params.id;
    let index = products.findIndex(p => p.id === productId);
    if(index !== -1){
        fs.appendFileSync(`./cart.txt`,`${JSON.stringify(products[index], null,2)}\n`)
        res.json(products[index])
        
    }
    else {
        res.status(404).send(`A product with id ${productId}, does not exist`);
    }
})

app.get("*",(req,res)=>{
    res.status(404).send("<h1> Specified route does not exist");
})

app.listen(3000, ()=>{
    console.log("Server is active...");
})

