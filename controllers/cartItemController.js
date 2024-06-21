import {
  findCartItemById,
  removeCartItem,
  updateCartItem,
} from "../services/cartItemService";

const updatedCartItem = async (req, res) => {
  const { user } = req;
  try {
    const CartItem = await updateCartItem(
      user._id,
      req.params.id,
      req.body
    );
    return res.status(200).send(CartItem);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const removedCartItem = async (req, res) => {
  const { user } = req;
  try {
    await removeCartItem(user._id, req.params.id);
    return res.status(200).send({message:"cart item removed successfully"});
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

export {updatedCartItem,removedCartItem}