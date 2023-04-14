import mongoose from "mongoose";

const uri =
  "mongodb+srv://dedayo16:12345@myapp.voq5ub9.mongodb.net/taskApp?retryWrites=true&w=majority";
const connect = () => {
  return mongoose.connect(uri);
};

export default connect;
