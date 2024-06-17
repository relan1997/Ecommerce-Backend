import Cart from '../src/models/cartModel.js'

const createCart = async (user)=>{
    try {
        const cart = new Cart({user}); // a cart has been created for the specific user
    const createdCart = await cart.save();
    return createdCart;
    } catch (err) {
        throw new Error(err.message)
    }
}

export {createCart}