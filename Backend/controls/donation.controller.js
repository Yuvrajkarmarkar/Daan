import Donation from '../models/donation.model.js';
import { errorHandler } from '../utils/error.js';

export const createDonation = async (req, res, next) => {
    const { donor, category, item, quantity, description } = req.body;

    if (!donor || !category || !item || !quantity || donor === ' ' || category === ' ' || item === ' ' || quantity === ' ') {
        return next(errorHandler(400, "All fields must be filled"));
    }

    const newDonation = new Donation({
        donor,
        category,
        item,
        quantity,
        description
    });

    try {
        await newDonation.save();
        res.json('Donation created successfully');
    } catch (error) {
        next(error);
    }
};

export const getDonations = async (req, res, next) => {
    try {
        const donations = await Donation.find().populate('donor', 'username email');
        res.json(donations);
    } catch (error) {
        next(error);
    }
};

export const getDonationById = async (req, res, next) => {
    const { id } = req.params;

    try {
        const donation = await Donation.findById(id).populate('donor', 'username email');
        if (!donation) {
            return next(errorHandler(404, "Donation not found"));
        }
        res.json(donation);
    } catch (error) {
        next(error);
    }
};

export const updateDonation = async (req, res, next) => {
    const { id } = req.params;
    const { category, item, quantity, description } = req.body;

    try {
        const donation = await Donation.findById(id);
        if (!donation) {
            return next(errorHandler(404, "Donation not found"));
        }

        donation.category = category || donation.category;
        donation.item = item || donation.item;
        donation.quantity = quantity || donation.quantity;
        donation.description = description || donation.description;

        await donation.save();
        res.json('Donation updated successfully');
    } catch (error) {
        next(error);
    }
};

export const deleteDonation = async (req, res, next) => {
    const { id } = req.params;

    try {
        const donation = await Donation.findById(id);
        if (!donation) {
            return next(errorHandler(404, "Donation not found"));
        }

        await donation.remove();
        res.json('Donation deleted successfully');
    } catch (error) {
        next(error);
    }
};