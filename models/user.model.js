import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";

const { Schema } = mongoose;
const user = new Schema({
    fullName: {
        type: String,
        required: [true, "firstName is required"],
    },
    email: {
        type: String,
        required: [true, "email is required"],
        unique: [true, "You are already registered"],
    },
    password: {
        type: String,
        required: [true, "password is required"],
    },
    college: {
        type: String,
        required: [true, "college is required"],
    },
    about: {
        type: String,
    },
    compCreated: [{ type: Schema.Types.ObjectId, ref: 'competition' }],
    // compAccepted: [{ type: mongoose.Schema.Types.Schema.Types.ObjectId, ref: 'competition' }],
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

user.set("timestamps", true);
user.plugin(mongooseUniqueValidator);

const User = mongoose.model("user", user);
export { User };