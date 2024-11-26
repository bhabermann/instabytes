import { ObjectId } from 'mongodb';
import connect from '../config/databaseConfig.js';

const connection = await connect(process.env.CONNECTION_STRING);
const db = connection.db("instabytes");
const collection = db.collection("posts");

export async function listAllPosts() {
    return collection.find().toArray();
}

export async function insertPost(post) {
    return collection.insertOne(post);
}

export async function updatePost(id, post) {
    const objectId = ObjectId.createFromHexString(id);
    return collection.updateOne({_id: new ObjectId(objectId)}, {$set: post});
}