import express from 'express'
const cartItemRouter =express.Router()
import {updatedCartItem,removedCartItem} from '../../controllers/cartItemController'
import { authenticate } from '../middleware/authenticate'

cartItemRouter.put('/:id',authenticate,updatedCartItem)
cartItemRouter.delete('/:id',authenticate,removedCartItem);

export {cartItemRouter}
