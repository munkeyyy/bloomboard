import express from 'express'
import { createUser, deleteUser, getUser, getUsers, loginUser, updateUser } from '../controller/user.controller'
const router = express.Router()

router.post("/sign-up",createUser)
router.post("/sign-in",loginUser)
router.get("/get-user",getUsers)
router.get("/get-user/:id",getUser)
router.put("/update-user/:id", updateUser)
router.delete("/delete-user/:id", deleteUser)

export default router