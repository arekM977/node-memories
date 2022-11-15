import PostMessage from '../models/postMessage.js'

//https://www.restapitutorial.com/httpstatuscodes.html


export const getPosts = async (request, response) => {
    try
    {
        const postMessages = await PostMessage.find()
        console.log(postMessages)
        response.status(200).json(postMessages)
    }
    catch(error)
    {
        response.status(404).json({message:error.message})
    }
}

export const createPost = async (request,response) => {
    const post = request.body
    const newPost = new PostMessage(post)
    try
    {
        await newPost.save()
        response.status(201).json(newPost)
    }
    catch
    {
        response.status(409).json({message:error.message})
    }
}