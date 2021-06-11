import { Router } from "express";
import ParticipantsController from "../controllers/ParticipantsController.js";


const router = Router();


router.get("/", ParticipantsController.getParticipants);
router.post("/", ParticipantsController.newParticipant);


export default router;