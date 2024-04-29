import express from 'express';
import {helper} from "../../Handlers/index.js"
import { Controller } from '../../Controllers/index.js';

const router = express.Router();
// Create Note
router.post('/',helper.files.docUpload.single('doc'),Controller.DocReview);
router.post('/review',Controller.DocReview);


export default router;