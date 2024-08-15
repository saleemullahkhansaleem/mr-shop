import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: String,
  email: {
    type: String,
    unique: [true, "Email already exist"],
    required: [true, "Email required!"],
  },
  password: {
    type: String,
    required: [true, "Password required!"],
  },
  role: String,
});

export const User =
  mongoose.models.users || mongoose.model("users", userSchema);
