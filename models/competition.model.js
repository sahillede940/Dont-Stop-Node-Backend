import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";

const { Schema } = mongoose;
const competitionSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name of competition can not be empty"],
  },
  teamSize: {
    type: Number,
    required: [true, "Team size is needed"],
  },
  description: {
    type: String,
    required: [true, "Competition must have description"],
  },
  image: {
    type: String,
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  applied_users: [{ type: Schema.Types.ObjectId, ref: "userSelector" }],
  deadline: {
    type: Date,
  },
  location: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: new Date(),
    immutable: true,
  },
});

competitionSchema.set("timestamps", true);
competitionSchema.plugin(mongooseUniqueValidator);

const Competition = mongoose.model("competition", competitionSchema);
export { Competition };
