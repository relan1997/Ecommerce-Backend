import express from 'express'
const ratingRouter = express.Router();

import {getsProductRating,createsRating} from '../../controllers/ratingController'
import { authenticate } from '../middleware/authenticate';


ratingRouter.post('/create',authenticate,createsRating)
ratingRouter.put('/:id',authenticate,getsProductRating)

export {ratingRouter}