import cors from "cors";

import express, { NextFunction, Request, Response } from "express";

import dotenv from "dotenv";
import agentRoutes from "./routes/agentRoutes";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(cors({
    origin:"*"
}));

app.use("/api/agent",agentRoutes);

app.use((err:Error,req : Request,res:Response,next : NextFunction)=>{
    res.status(500).json({
        message:"internal server error",
    });
});

app.listen(PORT,()=>{
    console.log(`server is listening at port ${PORT}`);
});