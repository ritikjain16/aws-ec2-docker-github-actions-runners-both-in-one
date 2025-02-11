import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: String,
  age: Number,
  email: String,
});

const UserModel = mongoose.model("user", userSchema);

export default UserModel;
