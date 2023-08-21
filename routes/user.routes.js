import express from "express";
import { getById, signup,login } from "../controller/user.controller.js";

const router = express.Router();

// user routes
router.post("/signup", signup);
router.post("/login", login);
router.get('/getById/:id', getById)

export default router;


