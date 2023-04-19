import mongoose from "mongoose";

//const uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@myapp.voq5ub9.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`;
const connect = () => {
  return mongoose.connect(process.env.MONGO_URI);
};

export default connect;
