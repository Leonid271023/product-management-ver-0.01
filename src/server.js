import dotenv from 'dotenv';
import express from 'express';
import mongoose from "mongoose";
import productRouter from './routes/productRouter';

dotenv.config();

const app = express();
app.use(express.json());
app.use(productRouter);
const port = process.env.PORT || 3000;
async function startServer() {
    try {
            await mongoose.connect(process.env.MONGO_URI, {
                dbName: process.env.DB_NAME});
            console.log('Connected to MongoDB');
        app.listen(port, () => {
            console.log(`connected to port: ${port}`);
        });
        } catch (e) {
        console.log('Failed connecting to MongoDB: ', e);
    }
}
startServer();
export default app;