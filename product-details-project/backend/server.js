// this is gonna be the entry point for our API

// import is an ESM syntax, for that, use "type" : "module" in 'package.json'
import express from 'express';
import dotenv from "dotenv";

import { connectDb } from './config/db.js';
import productRoutes from "./routes/product.route.js";

dotenv.config();
const app = express();
// express() is a function that creates an Express application. The app variable is now an instance of that application, which you’ll use to define routes and start the server.


app.use(express.json()); // this is the middleware, that allows us to parse "req.body", that is... it allows us to accept JSON data in the body.


app.use("/api/products", productRoutes);


// The server must listen on a port to accept requests.
// listen for the port, call the callback function, once the port webpage is ready
app.listen(5002, () => {
    connectDb();
    console.log('Server started at http://localhost:5002');
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