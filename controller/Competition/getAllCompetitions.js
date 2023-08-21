import { Competition } from "../../models/competition.model.js";

export const getAllCompetitions = async (req, res) => {
    try {

        let Competitions= await Competition.find().populate('creator').populate('applied_users')

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