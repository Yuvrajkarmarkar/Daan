import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoute from './routes/auth.route.js';
import donationRoute from './routes/donation.route.js';

dotenv.config();

mongoose.connect(process.env.URL).then(
    () => {
        console.log('Mongodb connected');
    }
).catch((err) => {
    console.log(err);
});

const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log('Mongodb success');
});

app.use('/api/auth', authRoute);
app.use('/api/donations', donationRoute);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'internal error';
    res.status(statusCode).json(
        {
            success: false,
            statusCode,
            message
        });
    
});