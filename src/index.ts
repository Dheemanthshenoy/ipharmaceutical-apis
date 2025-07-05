import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const connectionString: string = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`

console.log(`DB Connection :: ${connectionString}`)

import apiRoutes from "./routes/index"
import { connectDb } from './constants/db';

connectDb(connectionString)

app.get('/', (_req, res) => {
  res.send('Hello, TypeScript + Node.js!');
});

app.use("/api", apiRoutes)

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
