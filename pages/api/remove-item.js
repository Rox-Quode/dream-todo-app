import { authOptions } from "pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
    // protecting the endpoint by checking that the user in signed in
    const session = await getServerSession(req, res, authOptions);
  
    if (!session) {
      return res.status(403).json({ message: "You need to be signed in" });
    }
    
    const todo = JSON.parse(req.body);
  
    const client = await clientPromise;
    await client
      .db("test")
      .collection("users")
      .updateOne(
        { email: session.user.email },
        {
          $pull: {
            todos: { id: todo.id },
          },
        }
      );
  
    res.status(200).json({ message: "Item removed" });
  }


