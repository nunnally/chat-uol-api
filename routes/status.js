import { Router } from "express";
import StatusController from "../controllers/StatusController.js";


console.log('injected')
const router = Router();

router.post("/", StatusController.update);


export default router;