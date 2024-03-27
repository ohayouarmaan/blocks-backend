import mongoose from "mongoose";

async function connect() {
  try {
    const db = await mongoose.connect(process.env.MONGO_URI);
    console.log(`[DATABASE] Database connected: ${db.connections[0].name}`);
  } catch (e) {
    console.log(`[DATABASE] Can't connect to the database.`);
    console.log((e as Error).message);
    throw new Error(`Error connecting to the database.`);
  }
}

export default connect;
