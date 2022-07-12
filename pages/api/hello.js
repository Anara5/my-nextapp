// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MongoClient } from "mongodb";

const mongoUri = process.env.MONGODB_URI;

export default async function handler(req, res) {
  res.status(200);
  res.send(await itshop);
}

export async function itShop() {
    const client = await MongoClient.connect(mongoUri);

    const db = client.db("myshop");
    const col = db.collection("itstuff");
    const data = await col.find().toArray();
    console.log(data);
    client.close();
    return {
        props: data
    }
}

const itshop = itShop();

