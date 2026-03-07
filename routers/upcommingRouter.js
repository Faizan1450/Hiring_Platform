import express from "express";
import { createBatch } from "../controllers/upcommingController/createBatch.js";
import { getUpcommingBatches } from "../controllers/upcommingController/getUpcommingBatches.js";
const upcommingRouter = express.Router();

upcommingRouter.get("/health", (req,res)=>{
    res.send({status:200, message: "Upcomming route health is good :-)"});
}); 

upcommingRouter.get("/", getUpcommingBatches);
upcommingRouter.post("/", createBatch); // Create new Batch to DB


export default upcommingRouter;