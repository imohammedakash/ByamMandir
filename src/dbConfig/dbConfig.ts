import mongoose from "mongoose";
export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URL!);
        const connection = mongoose.connection;
        connection.on('connected', () => {
            console.log('Mongoose connection established')
        })
        connection.on('error', (err) => {
            console.log('Mongoose connection error')
            console.log('Error: ' + err.message)
            process.exit()
        })
    } catch (err) {
        console.log(err);
    }
}