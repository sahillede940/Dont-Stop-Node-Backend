import { UserSelector } from "../../models/userSelector.js";

export const acceptCompetition = async (req, res) => {
  try {
    let {userSelectorId} = req.body

    let userComp = await UserSelector.findById(userSelectorId)
    
    userComp.status = true;

    await userComp.save()
    
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
