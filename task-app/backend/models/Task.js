import mongoose from "mongoose";
const { Schema } = mongoose;

//Task schema
const taskSchema = Schema({
  title: { type: String, required: [true, "title is required"] },
  desc: { type: String, required: [true, "Desc is required"] },
  imgUrl: { type: String, required: [true, "imgUrl is required"] },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Task = mongoose.model("Task", taskSchema);

export default Task;
