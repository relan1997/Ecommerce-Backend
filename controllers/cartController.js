import { createCart , findUserCart, addCartItem} from '../services/cartService'

const findUsersCart = async (req,res)=>{
    const {user} = req; // we will add a middleware which will by default add user to the req object so that we directly access the properties of that user
    try {
        const cart = await findUserCart(user._id)
        return res.status(200).send(cart)
    } catch (error) {
        return res.status(500).send({error:error.message});
    }
}

const addItemToCart = async (req,res)=>{
    const {user} = req; // we will add a middleware which will by default add user to the req object so that we directly access the properties of that user
    try {
        const cartItem = await addCartItem(user._id,req.body)
        return res.status(200).send(cartItem)
    } catch (error) {
        return res.status(500).send({error:error.message});
    }
}

export {addItemToCart,findUsersCart}