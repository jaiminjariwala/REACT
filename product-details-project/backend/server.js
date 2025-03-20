// this is gonna be the entry point for our API

// import is an ESM syntax, for that, use "type" : "module" in 'package.json'
import express from 'express';
import dotenv from "dotenv";
import { connectDb } from './config/db.js';
import Product from './models/product.model.js';

dotenv.config();
const app = express();  // express() is a function that creates an Express application. The app variable is now an instance of that application, which you’ll use to define routes and start the server.

app.use(express.json()); // this is the middleware, that allows us to parse "req.body" that is... it allows us to accept JSON data in the body (code written below).

// let's create a "products" route
// This code defines a POST route at "/products" that creates a new product in a MongoDB Database. It takes data from the client, validates it, saves it to the database, and sends an appropriate response back.
app.post("/api/products", async (req, res) => {
    // req -> is an object which contains clients data(like the product details) and 
    // res -> is an object, used to send a reply back to the client.

    console.log("Received Body", req.body)
    const product = req.body;    // This holds the data sent by the client in the request body, usually as a JSON object. "product" is an object.

    // Validation Ensures... the client sends complete data.
    // Checks if the name, price, and image fields are present in the "product" object.
    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ success: false, message: "Please provide all fields" });  // if validation fails, send a 400 bad request with a JSON message, and stops the function here, so no product is created, if the data is incomplete.
    }

    const newProduct = new Product(product);

    // the try-catch keeps the server running even if something fails.
    // save the product and respond
    try {
        // "await" -> pauses execution until the save is complete
        await newProduct.save();    // save newProduct to the database
        res.status(201).json({ success: true, data: newProduct });
        // 201 indicates -> a new resource is successfully created
        // success: true -> confirms the operation worked.
        // data: newProduct -> Returns the saved product
    } catch (error) {
        // if save() fails (e.g., due to database issue)
        console.log("Error in Create Product:", error.message); // log the error for debugging
        res.status(500).json({ success: false, message: "Server Error" });
        // Sends a "500 Internal Server Error" response with a generic message, keeping error details hidden from the client.
    }
});


// The server must listen on a port to accept requests.
// listen for the port, call the callback function, once the port webpage is ready
app.listen(5002, () => {
    connectDb();
    console.log('Server started at http://localhost:5002');
});

/*
    HTTP Status Codes:
        201: Success!
        400: Client's fault (bad data).
        500: Server's fault (something broke).

    This is a typical setup for a RESTful API endpoint to create resources.
*/


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