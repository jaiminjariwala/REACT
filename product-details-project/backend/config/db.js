// this is the database connection logic
import mongoose from 'mongoose';

export const connectDb = async () => {
    try {
        // here we'll be using the mongoose package, to be able to connect to our database
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1); // exit with status/process code of 1, means to exit with failure and 0 means success!
    }
};