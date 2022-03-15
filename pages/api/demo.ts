import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { getToken } from "next-auth/jwt"
const prisma = new PrismaClient();


type Post = {
  id: number;
  title: string;
  createdAt: Date;
};

interface Data {
  posts: Post[];
  nextId: number | undefined;
  name: string;
}


export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const secret = process.env.SECRET
  const token = await getToken({ req, secret })

  if (req.method === "GET") {
  if (token) {
    // Signed in
    // console.log("JSON Web Token", JSON.stringify(token, null, 2))
    res.status(200).json({ 
      name: "Yes John Doe",
      posts: [],
      nextId: undefined
    });
    res.end()

  } else {
    // Not Signed in
    // res.status(401)
    res.status(200).json({ 
      name: "Unauthen",
      posts: [],
      nextId: undefined
    });
    res.end()
  }

  }

  if (req.method === "POST") {
    res.status(200).json({ 
      name: "POST John Doe",
      posts: [],
      nextId: undefined
    });
  }
};
