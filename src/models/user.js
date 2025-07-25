import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true,
    default:""
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    // required: true,
    default: ""
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
export default  mongoose.models?.User || mongoose.model("User", userSchema);
