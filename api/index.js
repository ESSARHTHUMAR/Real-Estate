import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.routes.js"
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MomgoDB Connected!"))
  .catch((err) => console.log(err));

const app = express();

app.listen(3000, () => {
  console.log("Hii");
});

app.use("/api/user", userRouter)