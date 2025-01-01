import express from 'express';
import { createDonation, getDonations, getDonationById, updateDonation, deleteDonation } from '../controllers/donation.controller.js';

const router = express.Router();

router.post('/donations', createDonation);
router.get('/donations', getDonations);
router.get('/donations/:id', getDonationById);
router.put('/donations/:id', updateDonation);
router.delete('/donations/:id', deleteDonation);

export default router;