import express from 'express';
import multer from 'multer';
import cors from 'cors';
import { getAll, postPost, imageUploader, putPost, deletePost } from '../controllers/postsController.js';

const corsOptions = {
    origin: 'http://localhost:8000',
    optionsSuccessStatus: 200
};

// Multer configuration for windows
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({dest: './uploads', storage});

const routes = (app) => {
    app.use(express.json());
    app.use(cors(corsOptions));

    app.get("/posts", getAll);

    app.post("/posts", postPost);

    app.post("/upload", upload.single('image'), imageUploader);

    app.put("/posts/:id", putPost);

    app.delete("/posts/:id", deletePost);
}

export default routes;
