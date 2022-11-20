import express from 'express';
import mongoose from 'mongoose';

import PostMessage from '../models/postMessage.js'

//https://www.restapitutorial.com/httpstatuscodes.html

const router = express.Router();

export const getPosts = async (request, response) => {
    try
    {
        const postMessages = await PostMessage.find()
        response.status(200).json(postMessages)
    }
    catch(error)
    {
        response.status(404).json({message:error.message})
    }
}

// export const createPost = async (request,response) => {
//     const post = request.body
//     const newPost = new PostMessage(post)
//     try
//     {
//         await newPost.save()
//         response.status(201).json(newPost)
//     }
//     catch
//     {
//         response.status(409).json({message:error.message})
//     }
// }

export const createPost = async (req, res) => {
    const { title, message, selectedFile, creator, tags } = req.body;

    const newPostMessage = new PostMessage({ title, message, selectedFile, creator, tags })

    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export default router