export const connectDb = async () => {
    try {
        // here we'll be using the mongoose package, to be able to connect to our database
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {

    }
};