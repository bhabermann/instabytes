import express from 'express';
import multer from 'multer';
import { getAll, postPost, imageUploader } from '../controllers/postsController.js';

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

    app.get("/posts", getAll);

    app.post("/posts", postPost);

    app.post("/upload", upload.single('image'), imageUploader);
}

export default routes;
