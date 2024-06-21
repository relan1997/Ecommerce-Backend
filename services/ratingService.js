import Rating from "../models/rating.model.js";
import productService from "../services/product.service.js";

async function createRating(req, user) {
    const product = await productService.findProductById(req.productId);

    const rating = new Rating({
        product: product._id,
        user: user._id,
        rating: req.rating,
        createdAt: new Date()
    });
    //jis product ki rating chaiye usko find karlia and then uski and user ki id ka use karke reqData ke saath rating ka object bana dia
    return await rating.save();
}

async function getProductRating(productId) {
    return await Rating.find({ product: productId });
}
// ek specific product ke saari ratings ko find karlia 

export {
    createRating,
    getProductRating
};
