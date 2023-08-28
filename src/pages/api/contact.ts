import type { NextApiRequest, NextApiResponse } from 'next';

import { MongoClient, ObjectId } from 'mongodb';

const {
  MONGO_DB_PASSWORD,
  MONGO_DB_USER,
  MONGO_DB_CLUSTER_NAME,
  MONGO_DB_DATABASE,
} = process.env;
const url = `mongodb+srv://${MONGO_DB_USER}:${MONGO_DB_PASSWORD}@${MONGO_DB_CLUSTER_NAME}.8zylvbn.mongodb.net/${MONGO_DB_DATABASE}?retryWrites=true&w=majority`;

type NewMessage = {
  email: string;
  name: string;
  message: string;
  id?: ObjectId;
};

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    // second validation
    // if invalid res.status 422
    const newMessage: NewMessage = { email, name, message };
    const client = new MongoClient(url);
    try {
      await client.connect();
      console.log('Connected successfully to server');
    } catch (err) {
      res.status(500).json({ message: 'Could not connect to database' });
      return;
    }

    try {
      const db = client.db();
      const result = await db.collection('messages').insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (err) {
      client.close();
      res
        .status(500)
        .json({ message: 'Something went wrong, message could not be saved' });
      return;
    }
    client.close();
    res.status(201).json({ message: 'Successfuly stored your message', newMessage });
  }
}

export default handler;

// info: never included in any client side code
