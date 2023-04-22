import { UserNotes } from "@/backend/models/schema";
import { UserModel } from "@/backend/models/users";
import dbConnect from "@/backend/utils/dbConnect";


dbConnect();

export default async(req, res)=> {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        
        const response = await UserNotes.find({});
        res.json(response);
        
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "POST":
      try {
        const notes = new UserNotes(req.body);
        await notes.save()
        res.json(notes);
    
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
      case 'PUT':
        try{
          const user=await UserModel.findById(req.body.userID);
          const createdNotes=await UserNotes.findById(req.body.notesID)

          user.savednotes.push(createdNotes)
          await user.save()
          res.json({savedNotes:user.savednotes})

        }catch(error){
          console.log(error)
        }
        break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};


