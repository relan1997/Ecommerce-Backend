import express from 'express'
const reviewRouter = express.Router()
import {getsAllReviews,createsReview} from '../../controllers/reviewController'
import { authenticate } from '../middleware/authenticate'

reviewRouter.post('/create',authenticate,createsReview)
reviewRouter.get('/product/:id',authenticate,getsAllReviews)

export {reviewRouter}