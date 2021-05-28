

import mongoose from 'mongoose';

// ConnectDB is an object/function
const ConnectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        })
        console.log(`MongoDB Connected : ${conn.connection.host}`);
    }
    catch (error) {
        console.error(`Error : ${error.message}`);
        process.exit(1)
    }
}

export default ConnectDB;


