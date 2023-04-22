import { UserNotes } from "@/backend/models/schema";
import { UserModel } from "@/backend/models/users";
import dbConnect from "@/backend/utils/dbConnect";


dbConnect();

export default async(req, res)=> {
  const { method } = req;

  switch (method) {
      case 'GET':
        try{
          const user=await UserModel.findById(req.body.userID);
          const savedNotes=await UserNotes.find({
            _id:{$in:user.savednotes}
          })

          res.json({savedNotes})

        }catch(error){
          console.log(error)
        }
        break;
    default:
      res.status(400).json({ success: false });
      break;
    }
};