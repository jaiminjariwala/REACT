import Product from "../models/product.model.js";
import mongoose from "mongoose";

export const getProducts = async (req, res) => {
    try {
        // if you pass an empty object like {}, this means... fetch all the products, that we have in our database!
        const products = await Product.find({});
        res.status(200).json({ success: true, data: products });
    } catch (error) {
        console.log("error in fetching products:", error.message);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

// The below code defines a POST route at "/api/products/" that creates a new product in a MongoDB Database. 
// It takes data from the client, validates it, saves it to the database, and sends an appropriate response back.
export const createProduct = async (req, res) => {
    // req -> is an object which contains clients data(like the product details) and 
    // res -> is an object, used to send a reply back to the client.

    console.log("Received Body", req.body);
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
};

export const updateProduct = async (req, res) => {
    const { id } = req.params;

    const product = req.body;   // whatever the user wants to update, it can be name, price or image

    // if user inputs an invalid id, for updating the product then throw 404 error
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid Product Id!" });
    }

    // in order to update...
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });  // this product object is coming from req.body

        res.status(200).json({ success: true, data: updatedProduct });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    console.log("id:", id);

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid Product Id!" });
    }

    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Product deleted!" });
    } catch (error) {
        console.log("error in deleting product:", error.message);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};