import express from 'express';
import { addPost, deletePostById, getAllPost, getPostById, getUserById, updatePost } from '../Controller/postController.js';
import { verifyToken } from '../Controller/userController.js';

const postRouter = express.Router();

postRouter.get("/", getAllPost);
postRouter.post("/add", verifyToken, addPost);
postRouter.patch("/update/:id", verifyToken, updatePost);
postRouter.get("/:id", verifyToken, getPostById);
postRouter.delete("/:id", verifyToken, deletePostById);
postRouter.get("/user/:id", getUserById);


export default postRouter;