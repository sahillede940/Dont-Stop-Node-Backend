import { UserSelector } from "../../models/userSelector.js";

export const showMyRequests = async (req, res) => {
  try {
    let user_id = req.params["user_id"];
    let UserSelectors = await UserSelector.find({ userApplied: user_id }).populate("competition");

    // response
    res.json({
      success: true,
      UserSelectors: UserSelectors,
    });
  } catch (err) {
    console.log(err);
    res.json({
      success: false,
      message: "Internal server error",
      error: err,
    });
  }
};
