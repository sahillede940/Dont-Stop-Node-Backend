import { UserSelector } from "../../models/userSelector.js";
import { Competition } from "../../models/competition.model.js";

export const applyCompetition = async (req, res) => {
  try {
    let { userApplied, competition, note, fullName } = req.body;

    // creating a userSelector entity
    const userComp = await UserSelector.create({
      userApplied: userApplied,
      competition: competition,
      note: note,
      fullName: fullName,
    });

    // find competition
    let comp = await Competition.findById(competition);

    // pushing the entity to applied users in competition model
    comp.applied_users.push(userComp._id);

    // save
    await comp.save();

    res.json({
      success: true,
      userSelector: userComp,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Some internal error occured",
    });
  }
};
