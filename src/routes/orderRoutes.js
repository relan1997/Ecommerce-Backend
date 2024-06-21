import express from 'express'
const orderRouter = express.Router()
import {orderHistory,createsOrder,findsOrderById} from '../../controllers/orderController'
import { authenticate } from '../middleware/authenticate'

orderRouter.post('/',authenticate,createsOrder);
orderRouter.get('/user',authenticate,orderHistory);
orderRouter.get('/:id',authenticate,findsOrderById);

export {orderRouter}