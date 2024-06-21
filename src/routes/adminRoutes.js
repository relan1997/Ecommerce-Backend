import express from 'express'
const adminRouter =express.Router();

import {getAllOrders,confirmedOrders,shipOrders,deliverOrders,cancelOrders,deleteOrders} from '../../controllers/adminOrderController'
import { authenticate } from '../middleware/authenticate';

adminRouter.get('/',authenticate,getAllOrders);
adminRouter.put('/:orderId/confirmed',authenticate,confirmedOrders);
adminRouter.put('/:orderId/ship',authenticate,shipOrders);
adminRouter.put('/:orderId/deliver',authenticate,deliverOrders);
adminRouter.put('/:orderId/cancel',authenticate,cancelOrders);
adminRouter.put('/:orderId/delete',authenticate,deleteOrders);

export {adminRouter}