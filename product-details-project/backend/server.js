// this is gonna be the entry point for our API

// Before ESM, JavaScript mainly used CommonJS (CJS) for modules, but ESM provides a more efficient and standardized way to handle modularity, especially for browsers and modern Node.js applications.
// import is an ESM syntax, for that, use "type" : "module" in 'package.json'
import express from 'express';
import dotenv from "dotenv";
import { connectDb } from './config/db.js';

// dotenv.config(): This line tells dotenv to read your .env file (e.g., MONGO_URI=mongodb://localhost:27017/mydb) and make those variables available in process.env. For example, after this runs, process.env.MONGO_URI holds your MongoDB connection string.
dotenv.config();
const app = express();  // express() is a function that creates an Express application. The app variable is now an instance of that application, which you’ll use to define routes and start the server.


// Routes are how your server responds to client requests. This is where you define the API’s behavior.



// let's create a "products" route
app.get("/products", (req, res) => {
    // this will give us all the products, that we'll have in our database
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


