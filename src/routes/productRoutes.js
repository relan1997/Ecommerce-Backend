import express from "express";
const prodRouter = express.Router();
import {
  createsMultipleProducts,
  findsProductById,
  getsAllProducts,
  upadtesProduct,
  deletesProduct,
  createsProduct,
} from "../../controllers/productController";
import { authenticate } from "../middleware/authenticate";

prodRouter.post('/',authenticate,createsProduct)
prodRouter.post('/creates',authenticate,createsMultipleProducts);
prodRouter.delete('/:id',authenticate,deletesProduct);
prodRouter.put('/:id',authenticate,upadtesProduct)

export {prodRouter}