import {
  createUser,
  findUserByEmail,
  findUserById,
  getUserProfileByToken,
  getAllUsers,
} from "./userService";
import CartItem from "../src/models/cartItemsModel";

// to understand the working of the below function pls go to https://chatgpt.com/c/f20752bf-88f0-4b9c-b871-699b5f0f5919
const updateCartItem = async (userId, cartItemId, cartItemData) => {
  try {
    const item = findCartItemById(cartItemId);
    if (!item) {
      throw new Error("Cart Item Not Found :", cartItemId);
    }
    const user = await findUserById(item.userId);
    if (!user) {
      throw new Error("User Not Found :", userId);
    }
    if (user._id.toString() === userId.toString()) {
      item.quantity = cartItemData.quantity;
      item.price = item.quantity * item.product.price;
      (item.discountedPrice = item.quantity * item.product), discountedPrice;
      const updatedCartItem = await item.save();
      return updatedCartItem;
    } else {
      throw new Error("you cant update this cart item");
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

const removeCartItem = async (userId, cartItemId) => {
  try {
    const cartItem = await findCartItemById(cartItemId);
    const user = await findUserById(userId);

    if (user._id.toString() === cartItem.userId.toString()) {
      // will only allow the item from the cart to be removed if the user jiska item hai and current user same hai
      await CartItem.findByIdAndDelete(cartItemId);
    } else {
      throw new Error("You can't remove another user's item");
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

const findCartItemById = async (cartItemId) => {
  const cartItem = await findCartItemById(cartItemId);
  if (cartItem) return cartItem;
  else throw new Error("cart item with this id doee not exist", cartItemId);
};

export {findCartItemById , removeCartItem, updateCartItem}
