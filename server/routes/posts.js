import express from 'express';
import { get } from 'mongoose';
import { getPosts, createPost } from '../controllers/posts.js';

const router = express.Router();


router.get('/', getPosts)
router.post('/', createPost)




export default router