
import type { NextApiRequest, NextApiResponse } from "next"
import prisma from '../../../lib/prisma'
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
    const { method } = req;

    switch (method) {
      case 'GET':
        getAll(req, res);
        break;
      case 'POST':
        createFood(req, res);
        break;
      case 'PUT':
        updateFood(req, res);
        break;
      default:
        res.setHeader('Allow', ['GET', 'POST','PUT','DELETE']);
        res.status(405).end(`Method ${method} Not Allowed`);
        break;
    }


};
const getAll = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const playlists = await prisma.food.findMany();
        res.status(200).json(playlists);
      } catch (err) {
        console.log(err);
        // res.status(403).json({ err: "Error occured while adding a new food." });
        res.status(403).json(err);
      }
  };

const createFood = async (req: NextApiRequest, res: NextApiResponse) => {
        
  const data = req.body;
  try {
    const result = await prisma.food.create({
      data: {
        ...data
      },
    });
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(403).json({ err: "Error occured while adding a new food." });
  }
}


const updateFood = async (req: NextApiRequest, res: NextApiResponse) =>  {
  const {
    id,
    name,
    price,
    imageUrl,
    active,
    description,
    ingredients,
  } = req.body;
  try {
    const updateFood = await prisma.food.update({
      where: {
        id: parseInt(id),
      },
      data: {
        name,
        price,
        imageUrl,
        active,
        description,
        ingredients,
      },
    });
    res.status(200).json(updateFood);
  } catch (error) {
    res.status(403).json({ err: "Error occurred while updating a food item." });
  }
}
