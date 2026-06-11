import express from 'express';
import { registerWorker, loginWorker, getWorkers, getWorkerById, getWorkerProfile } from '../controllers/workerController.js';
import { protectWorker } from '../middleware/authMiddleware.js';
import upload from '../middleware/uploadMiddleware.js';

import {
  workerProfileLimiter,
  workerListLimiter,
  workerDetailsLimiter,
} from "../middleware/apiRateLimiter.js";


const router = express.Router();

router.post('/register', upload.single('profilePicture'), registerWorker);
router.post('/login', loginWorker);
router.get('/profile', workerProfileLimiter, protectWorker, getWorkerProfile);
router.get('/', workerListLimiter, getWorkers);
router.get('/:id', workerDetailsLimiter, getWorkerById);

export default router;
