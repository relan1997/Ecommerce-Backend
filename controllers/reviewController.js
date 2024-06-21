import {
    createReview,
    getAllReview
} from '../services/reviewService'

const createsReview = async(req,res)=>{
    const {user} =req;
    try {
        const review = await createReview(req.body,user);
        return res.status(201).send(review)
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

const getsAllReviews = async(req,res)=>{
    const productId=req.params.productId
    try {
        const reviews = await getAllReview(productId);
        return res.status(201).send(reviews)
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

export{getsAllReviews,createsReview}