import { Competition } from "../../models/competition.model.js";
import { UserSelector } from "../../models/userSelector.js";

export const removeRequest = async (req, res) => {
  try {
    let user_id = req.params["id"];
    await UserSelector.findOneAndDelete({ _id: user_id });

    // response
    res.json({
      success: true,
      message: "user deleted successfully",
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
