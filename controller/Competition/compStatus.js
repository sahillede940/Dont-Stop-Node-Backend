import { UserSelector } from "../../models/userSelector.js"

export const compStatus = async (req, res) => {
    try {
        let competitionId = req.params['compId']

        let users = await UserSelector.find({competition: competitionId});

        res.json({
            success: true,
            users: users
        })

    } catch (error) {
        console.log(error)
        res.json({
            success: false,
            message: "Some internal error occured"
        })
    }
}