const { default: mongoose } = require("mongoose");

const connection = {};

export const connectToDb = async () => {
  try {
    // Already a connection, dismiss and return.
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }

    // Basically update connection if not connected already.
    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connections[0].readyState;
    /* update connection using above... */
    
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
