import { Router } from "express";

import {
    getAllParticipants,
    getOneParticipants,
    postParticipant,
    updateParticipants,
    deleteParticipants
  } from "../controllers/participants.controller.js";
const router = Router();

router.get("/participants", getAllParticipants);
router.get("/participants:id", getOneParticipants);
router.post("/participants", postParticipant);
router.put("/participants:id", updateParticipants);
router.delete("/participants:id", deleteParticipants);


export default router