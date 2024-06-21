import {
  createOrder,
  placeOrder,
  confirmedOrder,
  shipOrder,
  deliveredOrder,
  cancelledOrder,
  findOrderById,
  usersOrderHistory,
  getAllOrders,
  deleteOrder,
} from "../services/orderService";

const createsOrder = async (req,res)=>{
    const {user} =req;
    try {
        let createdOrder=await createOrder(user,req.body)
        return res.status(201).send(createdOrder);
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

const findsOrderById = async (req,res)=>{
    const {user} =req;
    try {
        let createdOrder=await findOrderById(req.params.id)
        return res.status(201).send(createdOrder);
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

const orderHistory = async (req,res)=>{
    const {user} =req;
    try {
        let createdOrder=await usersOrderHistory(user._id)
        return res.status(201).send(createdOrder);
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

export {orderHistory,createsOrder,findsOrderById}