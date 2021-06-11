import { Router } from "express";
import MessagesController from "../controllers/MessagesController.js";


const router = Router();


router.get("/", MessagesController.getMessages);
router.post("/", MessagesController.newMessage);


export default router;