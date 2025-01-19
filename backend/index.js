import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mysql from "mysql";
import mongoose from "mongoose";
dotenv.config();
const app = express();
app.use(cors);
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
  console.log("Listenting on " + 8000);
});
