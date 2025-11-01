import express from 'express';
import dotenv from 'dotenv';
dotenv.config();


import './db.js';
import connectDB from './db.js';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from the server');
});

app.listen(PORT, () => {
    connectDB();
    console.log(`✅ Server is running on port ${PORT}`);
});