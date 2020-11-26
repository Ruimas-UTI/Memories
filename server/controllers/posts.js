import postMessages from "../models/postMessages.js";

export const getPosts = async (req,res) => {
    try {
        const Posts = await postMessages.find();
        res.status(200).json(Posts);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}
export const createPosts = async(req, res) => {
    const post = req.body;
    const newPost = new postMessages(post);
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}