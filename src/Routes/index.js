import uploadRoute from './UploadRoute/uploadRoute.js';
import UserRoute from './UserRoute/UserRoute.js';

import express from 'express';
const router = express.Router();

router.use('/upload',uploadRoute);
router.use('/user',UserRoute);

export default router;