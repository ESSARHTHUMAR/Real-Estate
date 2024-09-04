import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.routes.js"
import signUpRouter from "./routes/auth.route.js"

dotenv.config();


mongoose
.connect(process.env.MONGO_URL)
.then(() => console.log("MomgoDB Connected!"))
.catch((err) => console.log(err));

const app = express();

app.use(express.json())
app.listen(3000, () => {
  console.log("Hii");
});

app.use("/api/user", userRouter);
app.use("/api/auth", signUpRouter) 