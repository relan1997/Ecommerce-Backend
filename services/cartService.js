import Cart from "../src/models/cartModel.js";
import CartItem from "../src/models/cartItemsModel.js";
import Product from "../src/models/productModel.js";
const createCart = async (user) => {
  try {
    const cart = new Cart({ user }); // a cart has been created for the specific user
    const createdCart = await cart.save();
    return createdCart;
  } catch (err) {
    throw new Error(err.message);
  }
};

const findUserCart = async (userId) => {
  try {
    let cart = await Cart.findOne({ user: userId });

    let cartItems = await CartItem.find({ cart: cart._id }).populate("product"); //all the products with that cart._id will be stored in the cartItems variable

    cart.cartItems = cartItems;

    let totalPrice = 0;
    let totalDiscountedPrice = 0;
    let totalItem = 0;

    for (let cartItem of cart.cartItems) {
      totalPrice += cartItem.price;
      totalDiscountedPrice += cartItem.discountedPrice;
      totalItem += cartItem.quantity;
    }
    cart.totalPrice = totalPrice;
    cart.totalItem = totalItem;
    cart.discount = totalPrice - totalDiscountedPrice;

    return cart;
  } catch (error) {
    throw new Error(error.message);
  }
};

const addCartItem = async (userId, req) => {
  try {
    const cart = await Cart.findOne({ user: userId });
    const product = await Product.findById(req.productId); //finds the product that needs to be added into the cart
    const isPresent = await CartItem.findOne({
      cart: cart._id,
      productId: product._id,
      userId
    }); // we are checking if the specific product already exists in thatb specific cart or now
    if(!isPresent) {
        const cartItem = new CartItem({
            product:product._id,
            cart:cart._id,
            quantity:1,
            userId,
            price:product.price,
            size:req.size,
            discountedPrice:product.discountedPrice
        })
        const createdCartItem=await cartItem.save();
        cart.cartItems.push(createdCartItem)
        await cart.save()
        return "Item added to Cart"
    }

} catch (error) {
    throw new Error(error.message);
}   
};

export { createCart , findUserCart, addCartItem};
