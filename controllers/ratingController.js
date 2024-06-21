import {
    createRating,
    getProductRating
} from '../services/ratingService'

 
const createsRating = async(req,res)=>{
    const {user} =req;
    try {
        const rating = await createRating(req.body,user);
        return res.status(201).send(rating)
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

const getsProductRating = async(req,res)=>{
    const productId=req.params.productId
    try {
        const ratings = await getProductRating(productId);
        return res.status(201).send(ratings)
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

export{getsProductRating,createsRating}