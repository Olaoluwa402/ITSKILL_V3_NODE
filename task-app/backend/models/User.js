import mongoose from "mongoose";
const { Schema, model } = mongoose;

//user schema
const userSchema = new Schema({
  email: { type: String, required: [true, "Email is required"], unique: true },
  name: { type: String, required: [true, "Name is required"] },
  password: { type: String, required: [true, "password is required"] },
});

const User = mongoose.model("User", userSchema);

export default User;
