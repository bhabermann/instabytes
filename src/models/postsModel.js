import connect from '../config/databaseConfig.js';

const connection = await connect(process.env.CONNECTION_STRING);

export async function getAllPosts() {
    const db = connection.db("instabytes");
    const collection = db.collection("posts");
    return collection.find().toArray();
}
