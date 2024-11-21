import { MongoClient } from "mongodb";

export default async function connect(connectionString) {
    let mongoClient;

    try {
        mongoClient = new MongoClient(connectionString);
        
        console.log("Conectando ao banco de dados...");
        await mongoClient.connect();
        console.log("Conectado com sucesso!");

        return mongoClient;
    } catch (error) {
        console.error("Erro ao conectar com o banco de dados: ", error);
        process.exit();
    }
}