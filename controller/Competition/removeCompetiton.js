import { UserSelector } from "../../models/userSelector.js";

export const removeCompetition = async (req, res) => {
  try {
    let {userSelectorId} = req.body

    let userComp = await UserSelector.findById(userSelectorId)
    
    userComp.status = false;

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
