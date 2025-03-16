// this is gonna be the entry point for our API

// import is an ESM syntax, for that, use "type" : "module" in 'package.json'
import express from 'express';
import dotenv from "dotenv";
import { connectDb } from './config/db.js';
import Product from './models/product.model.js'

dotenv.config();
const app = express();  // express() is a function that creates an Express application. The app variable is now an instance of that application, which you’ll use to define routes and start the server.

// let's create a "products" route
app.post("/products", async (req, res) => {
    const product = req.body;    // user will send this data

    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ success: false, message: "Please provide all fields" });
    }

    const newProduct = new Product

    try {
        await newProduct.save();
        res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
        console.log("Error in Create Product:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
});


// The server must listen on a port to accept requests.
// listen for the port, call the callback function, once the port webpage is ready
app.listen(5001, () => {
    connectDb();
    console.log('Server started at http://localhost:5001');
});




/* 
    INSTEAD OF

    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    }
    in package.json!

    WE CAN SAY

    "scripts": {
        "dev": "node backend/server.js"
    }

    such that in terminal we just have to say "npm run dev" instead of 
    "node backend/server.js"
*/