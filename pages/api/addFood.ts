
import type { NextApiRequest, NextApiResponse } from "next"
import prisma from '../../lib/prisma'
type Post = {
  id: number
  title: string
  createdAt: Date
}

interface Data {
  posts: Post[]
  nextId: number | undefined
}

export default async (req: NextApiRequest, res: NextApiResponse) => {

  const {name,price} = req.body;
  try {
    const result = await prisma.food.create({
      data: {
          name:price
      },
    });
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(403).json({ err: "Error occured while adding a new food." });
  }
};