import fs from "fs";
import { listAllPosts, insertPost, updatePost } from "../models/postsModel.js";

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

export async function imageUploader(request, response) {
    if (!request.file.originalname) {
        console.error(request.file.originalname);
        return response.status(400).json({ error: "Invalid data" });
    }
    
    const newPost = {
        description: "",
        image: {
            url: request.file.originalname,
            alt: ""
        }
    };

    try {
        const createdPost = await insertPost(newPost);
        console.log(createdPost);
        const udatedImage = `uploads/${createdPost.insertedId}.jpg`;
        fs.renameSync(request.file.path, udatedImage);
        response.status(201).json(createdPost);
    } catch (error) {
        console.error(error.message);
        response.status(500).send("<html><img src='https://http.dog/500.jpg'></img></html>");
    }
}

export async function putPost(request, response) {
    const postId = request.params.id;
    const imageUrl = `http://localhost:3000/${postId}.jpg`;
    const updatedPost = {
        description: request.body.description,
        image: {
            url: imageUrl,
            alt: request.body.alt
        }
    };

    try {
        const result = await updatePost(postId, updatedPost);
        response.status(201).json(result);
    } catch (error) {
        console.error(error.message);
        response.status(500).send("<html><img src='https://http.dog/500.jpg'></img></html>");
    }
}