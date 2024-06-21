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

const getAllOrders = async (req,res)=>{
    try {
        const orders=await getAllOrders();
        return res.status(200).send(orders);
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

const confirmedOrders = async (req,res)=>{
    const {orderId} = req.params
    try {
        const orders=await confirmedOrder(orderId);
        return res.status(200).send(orders);
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

const shipOrders = async (req,res)=>{
    const {orderId} = req.params
    try {
        const orders=await shipOrder(orderId);
        return res.status(200).send(orders);
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

const deliverOrders = async (req,res)=>{
    const {orderId} = req.params
    try {
        const orders=await deliveredOrder(orderId);
        return res.status(200).send(orders);
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

const cancelOrders = async (req,res)=>{
    const {orderId} = req.params
    try {
        const orders=await cancelledOrder(orderId);
        return res.status(200).send(orders);
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

const deleteOrders = async (req,res)=>{
    const {orderId} = req.params
    try {
        const orders=await deleteOrder(orderId);
        return res.status(200).send(orders);
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

export {getAllOrders,confirmedOrders,shipOrders,deliverOrders,cancelOrders,deleteOrders}