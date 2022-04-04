import type { NextApiRequest, NextApiResponse } from "next"
import axios from 'axios';
import { setCookie } from 'nookies'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { username, password, email } = req.body;
  try {
  const response = await axios.post('http://localhost:1337/api/auth/local/register', {
    username,
    email,
    password,
  });
  console.log(response)

 
  
    setCookie({ res }, 'jwt', response.data.jwt, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    });

    res.status(200).end();
  } catch (err) {
    // res.status(400).send(e.response.data.message[0].messages[0]);
    res.status(400).send(err);
  }
}
