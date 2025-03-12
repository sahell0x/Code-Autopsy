import { NextFunction, Request, Response } from "express";
import viualizeTypes from "../zod-types/visualizeTypes";

const visualizeMiddleware = (req : Request,res : Response,next : NextFunction)=>{
    const bodyPayload = req.body;

    const {success} = viualizeTypes.safeParse(bodyPayload);

    if(!success){
         res.status(400).json({
            message:"invalid inputs",
        });
    }else{
        next();
    }
}

export default visualizeMiddleware;