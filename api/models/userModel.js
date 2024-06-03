import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default:
        "https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg",
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true } // Add the time of creation and the time of update
);
const User = mongoose.model("User", userSchema);
export default User;
