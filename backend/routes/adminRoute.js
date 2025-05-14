import express from 'express';
import {addWorker} from '../controllers/adminController.js';
import upload from '../middleware/multer.js'

const adminRouter= express.Router();

adminRouter.post('/addWorker',upload.single('image'),addWorker)// Add worker route

export default adminRouter;