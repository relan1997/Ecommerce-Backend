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

prodRouter.get('/',authenticate,getsAllProducts);
prodRouter.get('/id/:id',authenticate,findsProductById);

export {prodRouter}