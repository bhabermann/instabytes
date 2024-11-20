import express from 'express';

const app = express();
app.use(express.json())

const port = 3000;

const posts = [
    { description: 'Foto 1', image: 'https://http.cat/200.jpg' },
    { description: 'Foto 2', image: 'https://http.cat/201.jpg' },
    { description: 'Foto 3', image: 'https://http.cat/202.jpg' },
    { description: 'Foto 4', image: 'https://http.cat/203.jpg' },
    { description: 'Foto 5', image: 'https://http.cat/204.jpg' }
]

app.listen(port, () => {
    console.log("Servidor escutando...");
});

app.get("/posts", (req, res) => {
    res.status(200).send(posts);
});