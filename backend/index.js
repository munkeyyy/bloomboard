import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from "./routers/user.router"
import postRouter from "./routers/post.router"
import boardRouter from "./routers/board.router"
import mongoose from "mongoose";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT;
async function connectToDatabase() {
  try {
    await mongoose.connect(
      "mongodb+srv://rohit:rohitkhatri98@cluster0.tmdzg.mongodb.net/"
    );
    console.log("DB Connected!");
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
}
connectToDatabase()

app.listen(port, () => {
  console.log("Listenting on " + port);
});

app.use("/users/",userRouter)
app.use("/posts/",postRouter)
app.use("/boards/",boardRouter)
