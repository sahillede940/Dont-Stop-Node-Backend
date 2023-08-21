import { Competition } from "../../models/competition.model.js";

export const createCompetition = async (req, res) => {
  try {
    let { name, teamSize, description, image, creator, deadline, location} = req.body;

    const comp = await Competition.create({
      name: name,
      teamSize: teamSize,
      description: description,
      image: image,
      creator: creator,
      deadline: deadline,
      location: location,
    });

    res.json({
      success: true,
      competition: comp,
    });
  } catch (error) {
    console.log(error)
    res.json({
        success: false,
        message: "Some internal error occured"
    })
  }
};
