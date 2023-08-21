import { Competition } from "../../models/competition.model.js";
import { UserSelector } from "../../models/userSelector.js";

export const deleteCompetition = async (req, res) => {
   try{
    let comp_id = req.params['id'];
    await Competition.findOneAndDelete({_id:comp_id});
    
    // delete userSelector of that competition
    await UserSelector.deleteMany({competition: comp_id})

    // response
    res.json({
        success: true,
        message: "user deleted successfully",
    });

   }catch(err){
    console.log(err);
        res.json({
            success: false,
            message: "Internal server error",
            error: err,
        });
   } 
}