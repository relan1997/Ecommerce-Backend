import {
  createProduct,
  deleteProduct,
  updateProduct,
  getAllProducts,
  findProductById,
  createMutipleProduct,
  findProductById,
} from "../services/productService";

const createsProduct= async(req,res)=>{
    try {
        const product = await createProduct(req.body)
        return res.status(201).send(product);
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

const deletesProduct= async(req,res)=>{
    const productId =req.params.id
    try {
        const product = await deleteProduct(productId)
        return res.status(201).send(product);
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

const upadtesProduct= async(req,res)=>{
    const productId =req.params.id
    try {
        const product = await updateProduct(productId,req.body)
        return res.status(201).send(product);
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

const findsProductById= async(req,res)=>{
    const productId =req.params.id
    try {
        const product = await findProductById(productId)
        return res.status(201).send(product);
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

const getsAllProducts= async(req,res)=>{
    const productId =req.params.id //params is the home/:id mai :id waala part
    try {
        const products = await getAllProducts(req.query); // while the ?(....) waala jo part hai woh req.query mai aata hai
        return res.status(201).send(products);
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

const createsMultipleProducts= async(req,res)=>{
    const productId =req.params.id 
    try {
        const products = await createMutipleProduct(req.body); 
        return res.status(201).send({messgae:'products created successfully'}); // check deleted waala mai {} mai text paas kia hai in the video?
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

export {createsMultipleProducts,findsProductById,getsAllProducts,upadtesProduct,deletesProduct,createsProduct}