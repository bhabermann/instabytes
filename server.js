import express from 'express';

const app = express();
app.use(express.json())

const port = 3000;

const posts = [
    { description: 'Foto 1', image: 'https://http.cat/200.jpg', id: 1 },
    { description: 'Foto 2', image: 'https://http.cat/201.jpg', id: 2 },
    { description: 'Foto 3', image: 'https://http.cat/202.jpg', id: 3 },
    { description: 'Foto 4', image: 'https://http.cat/203.jpg', id: 4 },
    { description: 'Foto 5', image: 'https://http.cat/204.jpg', id: 5 }
  ]

function buscarPostPorId(id) {
     return posts.findIndex((post) => {
        return post.id === Number(id);
     });
}

app.listen(port, () => {
    console.log("Servidor escutando...");
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorId(req.params.id);
    let post = posts[index];
    if (post == undefined) res.status(404).send('<img src="https://http.cat/404.jpg" alt="Imagem 404">');
    res.status(200).json(post);
});