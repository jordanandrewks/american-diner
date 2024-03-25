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

    console.log("Mongoose is connected!");
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

/* 
    Connection ready state

    0 = disconnected    -> i.e. isConnected returns *false*
    1 = connected   
    2 = connecting
    3 = disconnecting
  */

// this pattern ensures we use a single connection in the whole app.
