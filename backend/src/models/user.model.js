import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePic: { type: String, default: "" }, // ✅ camelCase only
    isAdmin: { type: Boolean, default: false }, // Admin flag
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
