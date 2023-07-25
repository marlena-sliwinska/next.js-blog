import type { NextApiRequest, NextApiResponse } from 'next';

import { MongoClient } from 'mongodb';

const url =
  'mongodb+srv://dev:DiV1LLo1tuyAoPtz@cluster-blog.8zylvbn.mongodb.net/blog?retryWrites=true&w=majority';
const client = new MongoClient(url);
const dbName = 'myProject';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;
    // double validation
    //  if(!email)
    // todo:
    // if invalid res.status 422
    // if data are valid
    // store in database
    // todo: make similar form for comments
    const newMessage = { email, name, message };
    const client = new MongoClient(url);
    try {
      await client.connect();
      console.log('Connected successfully to server');
    } catch (err) {
      res.status(500).json({ message: 'Could not connect to database' });
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
