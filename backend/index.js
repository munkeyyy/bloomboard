import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import mysql from "mysql"
dotenv.config()
const app = express()
app.use(cors)
app.use(express.json())
const port  = process.env.PORT
export const connection=mysql.createConnection({
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,  
    database:process.env.DB,
    // port:3306,
})

connection.connect(err=>{
    if(err) throw  err;
    console.log("Connected to MySQL Database")
})

app.listen(port,()=>{
    console.log("Listenting on " + port)
})
