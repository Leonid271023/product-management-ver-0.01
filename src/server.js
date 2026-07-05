import dotenv from 'dotenv';
import express from 'express';
import productRouter from './routes/productRouter';

dotenv.config();

const app = express();
app.use(express.json());
app.use(productRouter);