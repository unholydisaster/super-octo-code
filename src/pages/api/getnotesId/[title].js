import { UserNotes } from "@/backend/models/schema";
import dbConnect from "@/backend/utils/dbConnect";

dbConnect();

export default async(req, res)=> {
  const {
    query:{title}
    ,method
  }=req;

  switch (method) {
    case "GET":
      try {
        const note=await UserNotes.findOne(title)
        if(!note){
          res.status(400).json("note with that title was not found")
        }

        res.status(200).json(note);
        
      } catch{
        res.status(400).json("an error occured");
      }
      break;
    default:
      res.status(400).json("an error occured");
      break;
  }
};

