import express from 'express';
import { getAll, postPost } from '../controllers/postsController.js';

const routes = (app) => {
    app.use(express.json());

    app.get("/posts", getAll);

    app.post("/posts", postPost);
}

export default routes;
