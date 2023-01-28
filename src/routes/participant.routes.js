import { Router } from "express";

import {
    createParticipant,
    getAllParticipants,
    getOneParticipants,
    updateParticipants,
    DeleteParticipants
  } from "../controllers/participants.controller.js";
const router = Router();

 router.post("/api/participants", createParticipant);
 router.get("/api/participants", getAllParticipants);
router.get("/api/participants/:id", getOneParticipants);
router.put("/api/participants/:id", updateParticipants);
router.delete("/api/participants/:id", DeleteParticipants); 


export default router