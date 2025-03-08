import express from 'express'
import { createPost, deletePost, getPost, getPosts, updatePost } from '../controller/post.controller'
import { authMiddleware } from '../middleware/middleware'
import upload from '../config/multerconfig'
const router = express.Router()


router.post("/create-post", upload.single("file"),createPost)
router.get("/get-posts",getPosts)
router.get("/get-post/:id",getPost)
router.put("/update-post/:id", updatePost)
router.delete("/delete-post/:id", deletePost)

export default router