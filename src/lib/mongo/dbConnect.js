import mongoose from "mongoose";

const connection = {};

const dbConnect = async () => {
  if (connection.isConnected) {
    return;
  }

  // connect using the connection string...
  const db = await mongoose.connect(process.env.MONGO);

  connection.isConnected = db.connections[0].readyState;


};

export default dbConnect;
