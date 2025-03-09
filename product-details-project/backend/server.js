// this is gonna be the entry point for our API

// Before ESM, JavaScript mainly used CommonJS (CJS) for modules, but ESM provides a more efficient and standardized way to handle modularity, especially for browsers and modern Node.js applications.
// import is an ESM syntax, for that, use "type" : "module" in 'package.json'
import express from 'express';
import dotenv from "dotenv";
import { connectDb } from './config/db.js';

dotenv.config();
const app = express();  // call the function


// let's create a "products" route
app.get("/products", (req, res) => {
    // this will give us all the products, that we'll have in our database
});



// now we'll call "MONGO_URI Connection string" from the .env file, to connect to our database
console.log(process.env.MONGO_URI);


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


