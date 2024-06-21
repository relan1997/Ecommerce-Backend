import express from "express";
const cartRouter = express.Router();
import { addItemToCart, findUsersCart } from "../../controllers/cartController";
import { authenticate } from "../middleware/authenticate";

cartRouter.get("/",authenticate, findUsersCart);
cartRouter.put("/add", authenticate, addItemToCart);

export {cartRouter};