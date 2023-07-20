import type { NextApiRequest, NextApiResponse } from 'next';

function handler(req: NextApiRequest, res: NextApiResponse) {
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
    console.dir(newMessage);
    res.status(201).json({ message: 'Successfuly stored your message', newMessage });
  }
}

export default handler;

// info: never included in any client side code
