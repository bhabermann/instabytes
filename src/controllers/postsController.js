import { listAllPosts, insertPost } from "../models/postsModel.js";

export async function getAll(request, response) {
    const posts = await listAllPosts();

    response.status(200).json(posts);
}

export async function postPost(request, response) {
    const content = request.body;

    if (!content) {
        console.error(content);
        return response.status(400).json({ error: "Invalid data" });
    }

    try {
        const createdPost = await insertPost(content);
        response.status(201).json(createdPost);
    } catch (error) {
        console.error(error.message);
        response.status(500).send("<html><img src='https://http.dog/500.jpg'></img></html>");
    }
}