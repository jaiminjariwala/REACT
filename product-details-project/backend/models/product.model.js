/*
    => What is Object Data Modelling (ODM) ?
    * Object Data Modeling (ODM) is a technique used in databases to represent and manage data using objects, similar to how data is structured in programming languages.
    * 
    * Key Points of ODM:
    * 1. Maps objects in code to database documents (e.g., MongoDB collections).
    * 2. Provides schema-based modeling to define data structure.
    * 3. Enables easy data validation and relationship management.
    * 4. Simplifies database queries using object-oriented methods.
    * 5. Helps maintain consistency between the database and application code.
    * 
    * Example: Mongoose is an ODM for MongoDB that allows defining schemas and interacting with the database in a structured way.
 */


/*
 => What is Mongoose?
    * Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js.
    * It simplifies MongoDB interactions by providing schema-based data modeling.
    *
    * Key Features of Mongoose:
    * 1. Schema-based modeling – Defines a structure for documents in MongoDB.
    * 2. Data validation – Ensures only valid data is stored in the database.
    * 3. Middleware (Hooks) – Executes functions before or after database operations.
    * 4. Query building – Allows chaining and simplifies complex queries.
    * 5. Built-in type casting – Automatically converts data to required types.
    * 6. Relationships & Population – Supports referencing documents from other collections.
    * 7. Supports built-in and custom methods – Allows defining helper functions for models.
    *
    * Mongoose makes working with MongoDB more structured and efficient!
 */

/*
    => What is Collection in MongoDB?
    * A collection in MongoDB is similar to a table in relational databases.
    * It stores multiple documents(records) with a similar structure.
    

    => What is Collection in Mongoose?
    * In mongoose when we create a model... mongoose.model('Product', productSchema) mongoDB automatically creates a collection with the pluralized name of the model (products, in this case).
    * A collection holds multiple documents (objects) that follow the structure defined in the schema.
*/

/*
    •	Schema: Defines the structure of documents.
    •	Model: Represents a collection and provides methods to interact with the database.
    •	Collection: A group of documents in MongoDB.
    •	Document: A single record inside a collection.
*/
import mongoose from 'mongoose';

// first we'll create our schema
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, {
    // timestamps: true => Automatically adds "createdAt" and "updatedAt" timestamps to documents.
    timestamps: true
});

// now depending on the schema, we'll create our product model. This says to mongoose that you should create a model or a collection called product and you should take a look at "productSchema"
const Product = mongoose.model('Product', productSchema);
// products collection

export default Product;