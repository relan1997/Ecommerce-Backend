import express from "express";
import cors from 'cors'
const app = express()

app.use(express.json()) //It parses incoming requests with JSON payloads and makes the parsed data available in req.body.
//for more info pls go to https://chatgpt.com/c/e558d98f-76a8-46e9-8b18-ad1aaff7a7cb
app.use(cors()) //prevents the cors error from occuring

app.get('/',(req,res)=>{
    res.status(200).send({message:"Welcome to e-commerce api"}) 
})
// it's a good practice to always send the status along with .send or any other info 
// for more info pls go to https://chatgpt.com/c/e8604fb9-b134-4dfd-8242-28f6064b9cd7


export default app;