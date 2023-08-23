import { Competition } from "../../models/competition.model.js";
import { UserSelector } from "../../models/userSelector.js";
import { User } from "../../models/user.model.js";

export const getMyCompetitions = async (req, res) => {
    try {
        let user_id = req.params['user_id']
        let Competitions= await Competition.find({creator: user_id}).populate('creator').populate('applied_users')

        // response
        res.json({
            success: true,
            Competitions: Competitions,
        });

    } catch (err) {
        console.log(err);
        res.json({
            success: false,
            message: "Internal server error",
            error: err,
        });
    }
}