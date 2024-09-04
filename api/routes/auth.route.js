import express from "express"
import signUp from "../controllers/auth.controller.js";

const router = express.Router();


const auth = router.post("/signup", signUp)

export default auth