import mongoose from 'mongoose';

const donationSchema = new mongoose.Schema({
    donor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    category: {
        type: String,
        required: true,
        enum: ['Food', 'Clothes', 'Money', 'Electronics', 'Stationary', 'Toys'],
    },
    item: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
    },
}, { timestamps: true });

const Donation = mongoose.model('Donation', donationSchema);

export default Donation;