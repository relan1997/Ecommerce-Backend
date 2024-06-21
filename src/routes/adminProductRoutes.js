import express from "express";
const adminProductRouter = express.Router();
import {
  createsMultipleProducts,
  findsProductById,
  getsAllProducts,
  upadtesProduct,
  deletesProduct,
  createsProduct,
} from "../../controllers/productController";
import { authenticate } from "../middleware/authenticate";

adminProductRouter.post('/',authenticate,createsProduct)
adminProductRouter.post('/creates',authenticate,createsMultipleProducts);
adminProductRouter.delete('/:id',authenticate,deletesProduct);
adminProductRouter.put('/:id',authenticate,upadtesProduct)

export {adminProductRouter}