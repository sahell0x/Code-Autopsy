import {Router} from "express";
import visualizeMiddleware from "../middlewares/visualizeMiddleware";
import visualizeController from "../controllers/visualizeController";

const agentRoutes = Router();


agentRoutes.post("/visualize",visualizeMiddleware,visualizeController);

export default agentRoutes;

