import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";

const { Schema } = mongoose;

const userSelectorSchema = new Schema({
    userApplied: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    competition: {
        type: Schema.Types.ObjectId,
        ref: 'competition'
    },
    fullName: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: false
    },
    note: {
        type: String,
    }
})
userSelectorSchema.set("timestamps", true);
userSelectorSchema.plugin(mongooseUniqueValidator);

const UserSelector = mongoose.model("userSelector", userSelectorSchema);
export { UserSelector };