import mongoose from "mongoose";
const { Schema, model } = mongoose;
import bcrypt from "bcrypt";

//user schema
const userSchema = new Schema({
  email: { type: String, required: [true, "Email is required"], unique: true },
  name: { type: String, required: [true, "Name is required"] },
  isVerified: { type: Boolean, default: false },
  token: { type: String, default: null },
  role: { type: String, enum: ["admin", "user"], default: "user" },
  password: { type: String, required: [true, "password is required"] },
});

//compare previou password with current
userSchema.methods.matchPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

//hash password
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  console.log(salt, "salt");
  const hash = await bcrypt.hash(this.password, salt);
  console.log(hash, "hash");
  this.password = hash;
});
const User = mongoose.model("User", userSchema);

export default User;
