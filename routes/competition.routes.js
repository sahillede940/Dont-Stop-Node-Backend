import express from "express";
import { acceptCompetition } from "../controller/Competition/acceptCompetition.js";
import { applyCompetition } from "../controller/Competition/applyCompetition.js";
import { compStatus } from "../controller/Competition/compStatus.js";
import { createCompetition } from "../controller/Competition/createCompetition.js";
import { deleteCompetition } from "../controller/Competition/deleteCompetition.js";
import { getAllCompetitions } from "../controller/Competition/getAllCompetitions.js";
import { getMyCompetitions } from "../controller/Competition/getMyCompetitions.js";
import { removeCompetition } from "../controller/Competition/removeCompetiton.js";
import { showMyRequests } from "../controller/Competition/showMyRequests.js";

const router = express.Router();

// competition routes visible to user
router.post("/createCompetition",createCompetition);
router.get("/getMyCompetitions/:user_id",getMyCompetitions);
router.delete("/deleteCompetition/:id",deleteCompetition);
router.put("/applyCompetition",applyCompetition);
router.put("/acceptCompetition",acceptCompetition);
router.put("/removeCompetition",removeCompetition);
router.get("/showMyRequests/:user_id",showMyRequests);
router.get('/compStatus/:compId', compStatus);

//On competitions page
router.get("/getAllCompetitions",getAllCompetitions);



export default router;


