import express from 'express';
import { Controller } from '../../Controllers/index.js';
const router = express.Router();

router.post('/addData', Controller.addData);
router.post('/rankByEmail', Controller.getRankByEmail);
router.post('/rankRange', Controller.getRankInRange);
export default router;