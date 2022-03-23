
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
	const {
		query: { id },
		method,
	} = req;

    switch (method) {
      case 'GET':
         getById(req, res);
        break;
      case 'PUT':
        updateFood(req, res);
        break;
      case 'DELETE':
        deleteFood(req, res);
          break;
      default:
        res.setHeader('Allow', ['GET', 'POST','PUT','DELETE']);
        res.status(405).end(`Method ${method} Not Allowed`);
        break;
    }


};


const deleteFood = async (req: NextApiRequest, res: NextApiResponse) => {

    const {
		query: { id },
		method,
	} = req;

    try {
      const deleteFood = await prisma.food.delete({
        where: {
          id: parseInt(id),
        },
      });
      res.status(200).json({msg:parseInt(id)});
    } catch (error) {
      res.status(403).json({ err: "Error occured while deleting a food item." });
    }
  
  }

  const getById = async (req: NextApiRequest, res: NextApiResponse) => {

	const {
		query: { id },
		method,
	} = req;
    
    try {
      const result = await prisma.food.findFirst({
        where: {
          id: parseInt(id),
        },
      });
      res.status(200).json(result);
    } catch (error) {
      res.status(403).json({ err: "Error occured while deleting a food item." });
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
  

// export default async (req, res) => {
// 	const {
// 		query: { id },
// 		method,
// 	} = req;

// 	switch (method) {
// 		case "GET":
// 			try {
// 				const employee = await Employee.findById(id);

// 				return res.status(200).json({
// 					success: true,
// 					data: employee,
// 				});
// 			} catch (error) {
// 				return res.status(404).json({
// 					success: false,
// 				});
// 			}
// 		case "PUT":
// 			try {
// 				const employee = await Employee.findByIdAndUpdate(id, req.body, {
// 					new: true,
// 					runValidators: true,
// 				});

// 				return res.status(200).json({
// 					success: true,
// 					data: employee,
// 				});
// 			} catch (error) {
// 				return res.status(400).json({
// 					success: false,
// 				});
// 			}
// 		case "DELETE":
// 			try {
// 				await Employee.deleteOne({ _id: id });

// 				return res.status(200).json({
// 					success: true,
// 					data: { id },
// 				});
// 			} catch (error) {
// 				return res.status(400).json({
// 					success: false,
// 				});
// 			}
// 		default:
// 			res.setHeaders("Allow", ["GET", "PUT", "DELETE"]);
// 			return res
// 				.status(405)
// 				.json({ success: false })
// 				.end(`Method ${method} Not Allowed`);
// 	}
// };