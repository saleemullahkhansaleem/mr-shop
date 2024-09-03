import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: String,
  email: {
    type: String,
    unique: [true, "Email already exist"],
    required: [true, "Email required!"],
  },
  phone: {
    type: String,
    unique: [true, "Phone number already exist"],
    required: [true, "Phone number required!"],
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
    required: [true, "Gender required!"],
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  dob: {
    type: String, 
    required: [true, "Date of birth required!"],
  },
  password: {
    type: String,
    required: [true, "Password required!"],
  },
});

export const User =
  mongoose.models.users || mongoose.model("users", userSchema);
