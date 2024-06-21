import express from "express";
import cors from "cors";
import { userRouter } from "./routes/userRoutes.js";
import { authRouter } from "./routes/authRoutes.js";
import { adminProductRouter } from "./routes/adminProductRoutes.js";
import { prodRouter } from "./routes/productRoutes.js";
import { cartRouter } from "./routes/cartRoutes.js";
import { cartItemRouter } from "./routes/cartItemRoutes.js";
import { orderRouter } from "./routes/orderRoutes.js";
import { reviewRouter } from "./routes/reviewRouter.js";
import { ratingRouter } from "./routes/ratingRoutes.js";
import { adminRouter } from "./routes/adminRoutes.js";
const app = express();

app.use(express.json()); //It parses incoming requests with JSON payloads and makes the parsed data available in req.body.
//for more info pls go to https://chatgpt.com/c/e558d98f-76a8-46e9-8b18-ad1aaff7a7cb
app.use(cors()); //prevents the cors error from occuring

app.get("/", (req, res) => {
  res.status(200).send({ message: "Welcome to e-commerce api" });
});
// it's a good practice to always send the status along with .send or any other info
// for more info pls go to https://chatgpt.com/c/e8604fb9-b134-4dfd-8242-28f6064b9cd7

app.use("/auth", authRouter); //agar koi end point '/auth' se encounter hua toh yeh waala router ko access karna hoga
app.use("/api/users", userRouter); // same upar waaala point

app.use("/api/products", prodRouter);
app.use("/api/admin/products", adminProductRouter);
app.use("/api/cart", cartRouter);
app.use("/api/cart_items", cartItemRouter);
app.use("/api/orders", orderRouter);
app.use('/api/admin/orders',adminRouter)
app.use("/api/reviews", reviewRouter);
app.use("/api/ratings", ratingRouter);

export default app;
