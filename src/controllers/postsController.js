import { getAllPosts } from "../models/postsModel.js";

export async function getAll(request, response) {
    const posts = await getAllPosts();

    response.status(200).json(posts);
}