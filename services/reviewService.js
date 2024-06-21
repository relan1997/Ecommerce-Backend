import Review from '../src/models/reviewModel.js'
import {
    createProduct,
    deleteProduct,
    updateProduct,
    getAllProducts,
    findProductById,
    createMutipleProduct,
    findProductById,
  } from './productService.js'

async function createReview(reqData, user) {
    const product = await findProductById(reqData.productId);

    const review = new Review({
        user: user._id,
        product: product._id,
        review: reqData.review,
        createdAt: new Date(),
    });
    //finding the product jiska review chaiye and uss product ka id aur user id ko lekar review mai store hoga
    await product.save();
    return await review.save()
}

async function getAllReview(productId) {
    const product = await findProductById(reqData.productId);
    //finding the product jiske saare reviews chaiye and unhe print karna hai
    return await Review.find({ product: productId }).populate("user");
}

export {
    createReview,
    getAllReview
};


