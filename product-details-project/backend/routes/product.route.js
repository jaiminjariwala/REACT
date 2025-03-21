import express from "express";

import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/product.controller.js";

const router = express.Router();

// in order to GET, POST, UPDATE or DELETE, we'll create an endpoint
router.get("/", getProducts);
router.post("/", createProduct);
router.delete("/:id", deleteProduct);
router.put("/:id", updateProduct);

export default router;


// NOTES:
// with ":id" user can pass any value, it's dynamic
// now we'll create a request for all (GET, POST, PUT, DELETE) protocols one after another in Postman.

/*
    HTTP Status Codes:
        201: Success!
        400: Client's fault (bad data).
        500: Server's fault (something broke).

    This is a typical setup for a RESTful API endpoint to create resources.
*/

/*
    we use "patch()" method, when we just update some fields on the resource
    we use "put()" method, when we update all fields on the resource
*/